import { SITE, photo, ARROW } from "../chrome.mjs";
import { FLAVORS, FAMILIES } from "../data.mjs";

const card = f => `<a class="pozzetto" href="carta.html" style="--flavor:${f.c}" data-cat="${f.f}" data-cursor="Ver carta">
      <span class="pozzetto__well">
        <span class="pozzetto__frost" aria-hidden="true"></span>
        <span class="pozzetto__lid" aria-hidden="true"></span>
      </span>
      <span class="pozzetto__body">
        <span class="pozzetto__name">${f.n}</span>
        <span class="pozzetto__note">${f.note}</span>
        ${(f.tags||[]).length ? `<span class="pozzetto__tags">${f.tags.map(t => `<span class="tag ${t === "Vegano" ? "tag--v" : t === "Con alcohol" ? "tag--a" : ""}">${t}</span>`).join("")}</span>` : ""}
      </span>
    </a>`;

export default {
  page: "sabores.html",
  title: "Sabores · La Gelateria Italiana",
  desc: "Los 22 sabores de La Gelateria Italiana en Ríos Rosas: pistacho siciliano D.O.P., chocolate belga 70 %, café 100 % arábica, avellana del Piamonte y frutas de temporada.",
  body: `
<header class="pagehead">
  <span class="pagehead__glow" aria-hidden="true"></span>
  <div class="shell">
    <nav class="crumbs mono" aria-label="Migas de pan"><a href="index.html">Inicio</a><span aria-hidden="true">/</span><span>Sabores</span></nav>
    <div class="pagehead__grid">
      <div class="pagehead__title" data-lines>
        <h1 class="display display--xl"><span class="row"><span>Veintidós</span></span><span class="row"><span><em class="italic">fijos</em>, y los</span></span><span class="row"><span>del día.</span></span></h1>
      </div>
      <div class="stack">
        <p class="lead">Esta es la carta fija. Además, todos los días elaboramos sabores nuevos en el obrador: las frutas entran y salen con la temporada y las cremas clásicas no se van nunca.</p>
        <p class="mono" style="color:var(--accent)"><span data-filter-live aria-live="polite">22 sabores</span> en carta</p>
      </div>
    </div>
  </div>
</header>

<div class="sticky-bar">
  <div class="shell">
    <div class="filters" data-filters role="group" aria-label="Filtrar sabores por familia">
      ${FAMILIES.map((f, i) => `<button class="chip" type="button" data-filter="${f.k}" aria-pressed="${i === 0 ? "true" : "false"}">${f.label}<span class="chip__n">${f.k === "all" ? FLAVORS.length : FLAVORS.filter(x => x.f === f.k).length}</span></button>`).join("\n      ")}
    </div>
  </div>
</div>

<section class="section" style="padding-top:clamp(3rem,6vw,5rem)">
  <div class="shell">
    <div class="pozzetti pozzetti--catalog" data-filter-target data-reveal>
      ${FLAVORS.map(card).join("\n      ")}
    </div>
    <p class="pending-note" style="margin-top:clamp(2.5rem,5vw,4rem)">
      <span aria-hidden="true">·</span>
      <span><b>Para el negocio:</b> los 22 sabores están tomados del panel de la tienda y de las etiquetas de la vitrina. Las descripciones cortas de cada uno son nuestras: repasadlas y corregid lo que no cuadre en <code>build/data.mjs</code>.</span>
    </p>
  </div>
</section>

<section class="section contrast-zone">
  <div class="shell">
    <div class="editorial">
      <div class="editorial__media">
        <div class="ph-frame" data-expand="12">
          ${photo({
            id: "S-01", file: "sabores-espatula.jpg",
            alt: "Espátula extendiendo gelato en una tarrina",
            ar: "4 / 5",
            desc: "Primer plano de la espátula extendiendo el gelato sobre la tarrina, con el pozzetto abierto detrás.",
            spec: "4:5 vertical · mín. 1600 px"
          })}
        </div>
      </div>
      <div class="editorial__body">
        <p class="eyebrow">Por qué se sirve con espátula</p>
        <h2 class="display display--m" style="margin-top:1.2rem">No se bolea.<br><em class="italic">Se extiende.</em></h2>
        <p class="lead measure" style="margin-top:1.6rem">
          La bola comprime el gelato y le mete aire de golpe. La espátula lo levanta en capas finas,
          así se derrite más despacio en la mano y el sabor llega antes al paladar.
          Es la forma italiana y es la única que usamos.
        </p>
        <div class="figs">
          <div><p class="fig__n">−12<span style="font-size:.5em"> °C</span></p><p class="fig__l">en el pozzetto tapado</p></div>
          <div><p class="fig__n"><span data-count="6">6</span></p><p class="fig__l">de fruta, con fruta de temporada</p></div>
          <div><p class="fig__n">24 h</p><p class="fig__l">vida útil de una cubeta en su punto</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" style="padding-top:0">
  <div class="shell">
    <div class="grid12" style="row-gap:2rem;align-items:start">
      <div style="grid-column:1 / span 4">
        <p class="eyebrow">Alérgenos</p>
        <h2 class="display display--s" style="margin-top:1rem">Pregunta siempre antes de pedir.</h2>
      </div>
      <div style="grid-column:6 / span 7" class="stack">
        <p class="lead">Trabajamos a diario con leche, frutos secos, huevo, gluten y soja en el mismo obrador. Aunque cada cubeta tiene su tapa y su espátula, no podemos garantizar la ausencia total de trazas cruzadas.</p>
        <p style="color:var(--fg-mute)">Si tienes una alergia declarada, dínoslo antes de servir: abrimos cubeta nueva, cambiamos de espátula y te enseñamos la ficha del sabor.</p>
        <div class="actions"><a class="btn btn--ghost" href="tel:${SITE.phoneHref}" data-magnetic="0.2"><span>Consultar por teléfono</span>${ARROW}</a></div>
      </div>
    </div>
  </div>
</section>

<section class="finale">
  <span class="finale__blob" style="top:-25%;right:-5%" data-parallax="14"></span>
  <div class="shell finale__inner">
    <p class="eyebrow">La carta completa</p>
    <h2 class="display display--l" style="max-width:16ch">Ya sabes el sabor. Elige el <em class="italic">formato</em>.</h2>
    <div class="actions actions--center">
      <a class="btn btn--solid" href="carta.html" data-magnetic="0.25"><span>Ver carta y formatos</span>${ARROW}</a>
      <button class="btn btn--ghost" type="button" data-order-open data-magnetic="0.18" aria-haspopup="dialog" aria-controls="order-panel"><span>Pedir online</span></button>
    </div>
  </div>
</section>
`
};
