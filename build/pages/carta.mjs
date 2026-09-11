import { SITE, photo, ARROW } from "../chrome.mjs";

const SECTIONS = [
  {
    k: "Helados", note: "Servido con espátula, siempre. Cono o tarrina, tú eliges.",
    items: [
      ["Cono o tarrina pequeña", "Un sabor. Para probar sin comprometerse.", "3,60 €"],
      ["Cono o tarrina mediana", "Hasta dos sabores. El pedido más habitual de la casa.", "4,00 €"],
      ["Cono o tarrina grande", "Hasta tres sabores.", "4,60 €"],
      ["Cono sin gluten", "Suplemento sobre cualquier tamaño.", "+0,50 €"]
    ]
  },
  {
    k: "Para llevar a casa", note: "En envase isotérmico. Aguanta unos cuarenta minutos fuera.",
    items: [
      ["Envase 500 g", "Los sabores que quieras.", "14,00 €"],
      ["Envase 750 g", "Para una mesa de cuatro o cinco.", "20,00 €"],
      ["Envase 1000 g", "Un kilo. Para no quedarse corto.", "26,00 €"]
    ]
  },
  {
    k: "Café y batidos", note: "Los batidos se hacen con leche fresca y el sabor de helado que elijas.",
    items: [
      ["Café", "Corto, en taza caliente.", "1,50 €"],
      ["Café con leche", "Leche fresca de granja, como el gelato.", "2,00 €"],
      ["Batido", "Con leche fresca y tu sabor de helado favorito.", "4,90 €"]
    ]
  },
  {
    k: "Crepes", note: "Hechos al momento en la plancha.",
    items: [
      ["Azúcar y limón", "El clásico, sin más.", "4,00 €"],
      ["Nutella", "Generoso.", "4,90 €"]
    ]
  }
];

export default {
  page: "carta.html",
  title: "Carta · La Gelateria Italiana",
  desc: "Conos y tarrinas, copas de la casa, caffetteria Illy, granizados y tartas heladas por encargo en La Gelateria Italiana, Ríos Rosas 54, Madrid.",
  body: `
<header class="pagehead">
  <span class="pagehead__glow" aria-hidden="true"></span>
  <div class="shell">
    <nav class="crumbs mono" aria-label="Migas de pan"><a href="index.html">Inicio</a><span aria-hidden="true">/</span><span>Carta</span></nav>
    <div class="pagehead__grid">
      <div class="pagehead__title" data-lines>
        <h1 class="display display--xl"><span class="row"><span>La carta</span></span><span class="row"><span>de la <em class="italic">casa</em>.</span></span></h1>
      </div>
      <div class="stack">
        <p class="lead">Cuatro maneras de tomarlo: en la mano, en una caja para el camino, en taza o en la plancha.</p>
        <div class="actions">
          <button class="btn btn--solid" type="button" data-order-open data-magnetic="0.22" aria-haspopup="dialog" aria-controls="order-panel"><span>Pedir online</span>${ARROW}</button>
          <a class="btn btn--ghost" href="tel:${SITE.phoneHref}" data-magnetic="0.18"><span>Encargar por teléfono</span></a>
        </div>
      </div>
    </div>
  </div>
</header>

<section class="section" style="padding-top:clamp(2rem,4vw,3rem)">
  <div class="shell">
    <div class="grid12" style="row-gap:clamp(3rem,7vw,6rem);align-items:start">

      <div style="grid-column:1 / span 7" class="menu-block">
        ${SECTIONS.slice(0, 2).map(s => `<div>
          <div style="display:flex;justify-content:space-between;align-items:baseline;gap:1rem;border-bottom:1px solid var(--line-strong);padding-bottom:1rem;margin-bottom:.4rem">
            <h2 class="display display--s">${s.k}</h2>
          </div>
          <p class="mono" style="color:var(--fg-faint);margin:.9rem 0 .4rem">${s.note}</p>
          <ul class="menu-list">
            ${s.items.map(([n, d, side]) => `<li class="menu-row">
              <span><span class="menu-row__name">${n}</span><span class="menu-row__desc">${d}</span></span>
              <span class="menu-row__side menu-row__side--price">${side}</span>
            </li>`).join("\n            ")}
          </ul>
        </div>`).join("\n        ")}
      </div>

      <div style="grid-column:9 / span 4">
        <div style="position:sticky;top:clamp(6rem,12vh,8rem)">
        <div class="ph-frame" data-expand="16">
          ${photo({
            id: "C-01", file: "carta-cono.jpg",
            alt: "Cono de gelato recién servido",
            ar: "3 / 4",
            desc: "Cono recién servido en primer plano, sujeto con la mano, con la tienda desenfocada al fondo.",
            spec: "3:4 vertical · mín. 1600 px"
          })}
        </div>
        <p class="mono" style="color:var(--fg-faint);margin-top:1rem">El cono se prensa en tienda cada mañana</p>
        </div>
      </div>

      <div style="grid-column:1 / span 12">
        <hr class="rule" style="margin-block:clamp(1rem,3vw,2rem)">
      </div>

      <div style="grid-column:1 / span 5">
        <div style="position:sticky;top:clamp(6rem,12vh,8rem)">
        <div class="ph-frame" data-expand="16">
          ${photo({
            id: "C-02", file: "carta-copa.jpg",
            alt: "Copa de la casa montada en cristal",
            ar: "4 / 5",
            desc: "Una copa montada en cristal (tipo coppa con nata y fruta o affogato) sobre la mesa de la tienda.",
            spec: "4:5 vertical · mín. 1600 px"
          })}
        </div>
        </div>
      </div>

      <div style="grid-column:7 / span 6" class="menu-block">
        ${SECTIONS.slice(2).map(s => `<div>
          <div style="display:flex;justify-content:space-between;align-items:baseline;gap:1rem;border-bottom:1px solid var(--line-strong);padding-bottom:1rem;margin-bottom:.4rem">
            <h2 class="display display--s">${s.k}</h2>
          </div>
          <p class="mono" style="color:var(--fg-faint);margin:.9rem 0 .4rem">${s.note}</p>
          <ul class="menu-list">
            ${s.items.map(([n, d, side]) => `<li class="menu-row">
              <span><span class="menu-row__name">${n}</span><span class="menu-row__desc">${d}</span></span>
              <span class="menu-row__side menu-row__side--price">${side}</span>
            </li>`).join("\n            ")}
          </ul>
        </div>`).join("\n        ")}
      </div>

    </div>

    <p class="mono" style="margin-top:clamp(3rem,6vw,5rem);color:var(--fg-faint);text-align:center">
      La degustación es gratis · Todos los días elaboramos sabores nuevos
    </p>
  </div>
</section>

<section class="section contrast-zone">
  <div class="shell">
    <div class="grid12" style="align-items:center;row-gap:2.5rem">
      <div style="grid-column:1 / span 5" data-lines>
        <p class="eyebrow" style="margin-bottom:1rem">Para llevar</p>
        <h2 class="display display--m"><span class="row"><span>Cuarenta</span></span><span class="row"><span><em class="italic">minutos</em> de</span></span><span class="row"><span>margen.</span></span></h2>
        <p class="lead measure" style="margin-top:1.6rem">Las tarrinas salen en envase isotérmico con placa de frío. Si el trayecto es más largo, dínoslo y añadimos hielo seco.</p>
        <div class="actions" style="margin-top:1.6rem">
          <button class="btn btn--ghost" type="button" data-order-open data-magnetic="0.2" aria-haspopup="dialog" aria-controls="order-panel"><span>Pedir en Uber Eats o Glovo</span>${ARROW}</button>
        </div>
      </div>
      <div style="grid-column:7 / span 6">
        <div class="ph-frame" data-expand="12">
          ${photo({
            id: "C-03", file: "carta-tarrinas.jpg",
            alt: "Tarrinas de medio litro y un litro preparadas para llevar",
            ar: "16 / 10",
            desc: "Tarrinas de 500 ml y 1 l cerradas con la etiqueta de la casa, listas en el mostrador.",
            spec: "16:10 apaisada · mín. 2000 px"
          })}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="finale">
  <span class="finale__blob" style="bottom:-30%;left:-6%" data-parallax="12"></span>
  <div class="shell finale__inner">
    <p class="eyebrow">Encargos con 48 h</p>
    <h2 class="display display--l" style="max-width:17ch">Una tarta helada tarda dos días. <em class="italic">Merece la pena.</em></h2>
    <div class="actions actions--center">
      <a class="btn btn--solid" href="eventos.html" data-magnetic="0.25"><span>Encargos y eventos</span>${ARROW}</a>
      <a class="btn btn--ghost" href="tel:${SITE.phoneHref}" data-magnetic="0.18"><span>${SITE.phone}</span></a>
    </div>
  </div>
</section>
`
};
