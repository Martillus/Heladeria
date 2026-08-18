import { SITE, photo, ARROW } from "../chrome.mjs";
import { FLAVORS, FAMILIES } from "../data.mjs";

const card = f => `<a class="pozzetto" href="carta.html" style="--flavor:${f.c}" data-cat="${f.f}${(f.tags||[]).includes("Vegano") ? " vegano" : ""}" data-cursor="Ver carta">
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
  desc: "Los 35 sabores de gelato y sorbete que rotan en los pozzetti de Ríos Rosas: pistacho de Bronte, chocolate belga, café Illy, sorbetes veganos y especialidades.",
  body: `
<header class="pagehead">
  <span class="pagehead__glow" aria-hidden="true"></span>
  <div class="shell">
    <nav class="crumbs mono" aria-label="Migas de pan"><a href="index.html">Inicio</a><span aria-hidden="true">/</span><span>Sabores</span></nav>
    <div class="pagehead__grid">
      <div class="pagehead__title" data-lines>
        <h1 class="display display--xl"><span class="row"><span>Treinta y</span></span><span class="row"><span><em class="italic">cinco</em> tapas</span></span><span class="row"><span>que abrir.</span></span></h1>
      </div>
      <div class="stack">
        <p class="lead">Cada cubeta vive tapada a −12 °C. La lista se mueve con el mercado: los sorbetes de temporada entran y salen, las cremas clásicas no se van nunca.</p>
        <p class="mono" style="color:var(--pistacchio)"><span data-filter-live aria-live="polite">35 sabores</span> en carta</p>
      </div>
    </div>
  </div>
</header>

<div class="sticky-bar">
  <div class="shell">
    <div class="filters" data-filters role="group" aria-label="Filtrar sabores por familia">
      ${FAMILIES.map((f, i) => `<button class="chip" type="button" data-filter="${f.k}" aria-pressed="${i === 0 ? "true" : "false"}">${f.label}<span class="chip__n">${f.k === "all" ? FLAVORS.length : FLAVORS.filter(x => x.f === f.k).length}</span></button>`).join("\n      ")}
      <button class="chip" type="button" data-filter="vegano" aria-pressed="false">Veganos<span class="chip__n">${FLAVORS.filter(f => (f.tags||[]).includes("Vegano")).length}</span></button>
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
      <span><b>Para el negocio:</b> los sabores confirmados por vuestras reseñas son pistacho, chocolate belga, café Illy, tiramisú, turrón, chocolate y yogur. El resto de la lista es una propuesta editable en <code>build/data.mjs</code>. Ajustad nombres, notas y alérgenos antes de publicar.</span>
    </p>
  </div>
</section>

<section class="section panna-zone">
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
          <div><p class="fig__n"><span data-count="11">11</span></p><p class="fig__l">sorbetes veganos, sin lácteos</p></div>
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
    </div>
  </div>
</section>
`
};
