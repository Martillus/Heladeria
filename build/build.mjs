import { writeFile, mkdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { head, foot, NAV } from "./chrome.mjs";

const PAGES = ["index", "sabores", "carta", "obrador", "eventos", "resenas", "visitanos"];

const mods = await Promise.all(PAGES.map(p => import(`./pages/${p}.mjs`).then(m => m.default)));

for (const p of mods) {
  const html = head({ title: p.title, desc: p.desc, page: p.page }) + p.body + foot();
  await writeFile(p.page, html, "utf8");
  console.log(`  ${p.page.padEnd(16)} ${(html.length / 1024).toFixed(1)} KB`);
}

/* ---------------------------------------------------------
   Inventario de fotografías pendientes
   --------------------------------------------------------- */
const slotRe = /<figure class="ph[^"]*" style="([^"]*)" data-photo="([^"]+)">\s*<img class="ph__img" src="assets\/img\/([^"]+)" alt="([^"]*)"[^>]*>\s*<figcaption class="ph__empty">[\s\S]*?<span class="ph__code">[^<]*<\/span>\s*<span class="ph__desc">([\s\S]*?)<\/span>\s*<span class="ph__spec">([^·]*)·/g;

const slots = [];
const seen = new Set();
for (const p of mods) {
  const html = await readFile(p.page, "utf8");
  for (const m of html.matchAll(slotRe)) {
    const [, style, id, file, alt, desc, spec] = m;
    if (seen.has(id)) continue;
    seen.add(id);
    slots.push({ id, file, alt, desc: desc.trim(), spec: spec.trim(), page: p.page,
      ar: (style.match(/--ar:([^;"]+)/) || [, ""])[1].trim() });
  }
}

const inv = `# Fotografías pendientes

Coloca cada archivo en esta carpeta **con el nombre exacto de la columna \`Archivo\`**.
La web las detecta sola: en cuanto el archivo existe, el hueco se rellena y el aviso
desaparece. No hay que tocar ni una línea de código.

- Formato recomendado: **JPG o WebP**, calidad 80-85.
- Cada foto se usa **una sola vez** en toda la web.
- Si falta alguna, el hueco se queda señalizado con su descripción: la web no se rompe.

**Huecos: ${slots.length}**

| # | Archivo | Página | Formato | Qué tiene que salir |
|---|---------|--------|---------|---------------------|
${slots.map(s => `| \`${s.id}\` | \`${s.file}\` | ${s.page} | ${s.ar} · ${s.spec} | ${s.desc} |`).join("\n")}

## Logotipo

No hemos recibido el logotipo. Mientras tanto va un distintivo provisional dibujado en
SVG (el cono dentro del aro del pozzetto), que aparece en la cabecera, en el pie, en el
cargador y en el favicon.

Para sustituirlo basta con dejar el vuestro en \`assets/logo/logo.svg\`: la web lo detecta
al cargar y reemplaza el provisional en todos los sitios a la vez. Que sea SVG monocromo
sobre fondo transparente y con área de seguridad cuadrada.
`;
await writeFile("assets/img/README.md", inv, "utf8");
console.log(`  assets/img/README.md  ${slots.length} huecos de foto`);

/* ---------------------------------------------------------
   Bundle de vista previa: un único archivo autocontenido
   con las 7 páginas y un enrutador en el cliente.
   --------------------------------------------------------- */
const CSS_FILES = ["fonts", "base", "components", "layout"].map(n => `assets/css/${n}.css`);
const JS_FILES = [
  "assets/vendor/gsap.min.js",
  "assets/vendor/ScrollTrigger.min.js",
  "assets/vendor/CustomEase.min.js",
  "assets/vendor/lenis.min.js",
  "assets/js/site.js"
];

let css = "";
for (const f of CSS_FILES) css += await readFile(f, "utf8") + "\n";

/* Fuentes en base64 para que el preview funcione sin red */
const fontRe = /url\(\.\.\/fonts\/([^)]+)\)/g;
const names = [...css.matchAll(fontRe)].map(m => m[1]);
for (const n of [...new Set(names)]) {
  const b64 = (await readFile(`assets/fonts/${n}`)).toString("base64");
  css = css.split(`url(../fonts/${n})`).join(`url(data:font/woff2;base64,${b64})`);
}

let js = "";
for (const f of JS_FILES) js += await readFile(f, "utf8") + "\n;\n";

const bodies = {};
for (const p of mods) bodies[p.page] = p.body;

const chromeOf = p => {
  const full = head({ title: p.title, desc: p.desc, page: p.page });
  return full.slice(full.indexOf("<body"));
};

const shellPage = mods[0];
let shell = chromeOf(shellPage) + shellPage.body + foot();
shell = shell.slice(0, shell.indexOf("<script src="));

const preview = `<!doctype html>
<html lang="es" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>La Gelateria Italiana</title>
<meta name="description" content="${shellPage.desc}">
<meta name="theme-color" content="#0b1410">
<style>${css}</style>
</head>
${shell}
<script>${js}</script>
<script>
/* Enrutador de la vista previa: sustituye <main> sin recargar. */
(function () {
  var PAGES = ${JSON.stringify(bodies)};
  var TITLES = ${JSON.stringify(Object.fromEntries(mods.map(m => [m.page, m.title])))};
  var main = document.getElementById("main");
  window.__lgiPreview = true;

  function render(key, push) {
    if (!PAGES[key]) return false;
    main.innerHTML = PAGES[key];
    document.title = TITLES[key];
    document.body.dataset.page = key;
    document.querySelectorAll(".nav-item").forEach(function (a) {
      var h = a.getAttribute("href");
      h === key ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current");
    });
    if (push) history.pushState({ k: key }, "", "#" + key.replace(".html", ""));
    window.scrollTo(0, 0);
    if (window.__lgiRefresh) window.__lgiRefresh();
    return true;
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest("a");
    if (!a) return;
    var href = a.getAttribute("href");
    if (!href || !PAGES[href]) return;
    e.preventDefault();
    e.stopPropagation();
    var curtain = document.querySelector(".curtain");
    if (window.__lgiCloseNav) window.__lgiCloseNav();
    var go = function () { render(href, true); };
    if (window.gsap && curtain && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      curtain.style.visibility = "visible";
      gsap.timeline()
        .to(curtain, { clipPath: "circle(140% at 50% 50%)", duration: 0.6, ease: "power4.inOut", onComplete: go })
        .to(curtain, { clipPath: "circle(0% at 50% 50%)", duration: 0.75, ease: "power4.inOut", delay: 0.05,
          onComplete: function () { curtain.style.visibility = "hidden"; } });
    } else { go(); }
  }, true);

  window.addEventListener("popstate", function () {
    var k = (location.hash || "#index").slice(1) + ".html";
    render(k, false);
  });

  if (location.hash) render(location.hash.slice(1) + ".html", false);
})();
</script>
</body>
</html>`;

await mkdir("preview", { recursive: true });
await writeFile("preview/index.html", preview, "utf8");
console.log(`  preview/index.html  ${(preview.length / 1024 / 1024).toFixed(2)} MB`);
console.log(`\nListo: ${mods.length} páginas + vista previa.`);
