import { SITE, photo, ARROW } from "../chrome.mjs";

const SECTIONS = [
  {
    k: "Tarrinas y conos", note: "Servido con espátula, siempre. El cono se prensa cada mañana.",
    items: [
      ["Piccolo", "Un sabor. Para probar sin comprometerse.", "100 ml · tarrina o cono"],
      ["Medio", "Dos sabores. El pedido más habitual de la casa.", "180 ml · tarrina o cono"],
      ["Grande", "Tres sabores y nata montada si la quieres.", "250 ml · tarrina o cono"],
      ["Cono bagnato", "Cualquier tamaño, bañado en chocolate belga y avellana picada.", "Suplemento"]
    ]
  },
  {
    k: "Copas de la casa", note: "Montadas al momento en copa de cristal, para tomar sentado.",
    items: [
      ["Affogato al caffè", "Dos bolas de fior di latte ahogadas en un espresso Illy recién tirado.", "Clásico"],
      ["Coppa Bronte", "Pistacho, nata, pistacho picado y un hilo de crema de Bronte.", "Firma"],
      ["Coppa Amarena", "Fior di latte, cereza amarena en almíbar y nata montada.", "Clásico"],
      ["Tartufo nero", "Corazón de chocolate negro cubierto de cacao amargo.", "Para compartir"],
      ["Coppa del giorno", "La combinación que monta el equipo cada semana. Pregunta cuál toca.", "Rotativa"]
    ]
  },
  {
    k: "Caffetteria", note: "Café Illy 100 % Arábica, el mismo grano que va al gelato.",
    items: [
      ["Espresso", "Corto, en taza caliente.", "Illy"],
      ["Cappuccino", "Leche texturizada, sin exceso de espuma.", "Illy"],
      ["Caffè freddo", "Espresso enfriado de golpe sobre hielo.", "Verano"],
      ["Cioccolata calda", "Chocolate belga fundido a la taza, denso.", "Invierno"]
    ]
  },
  {
    k: "Granizados y bebidas", note: "Fruta exprimida el mismo día.",
    items: [
      ["Granita di limone", "Limón de Sorrento raspado, la receta siciliana.", "Vegano"],
      ["Granita al caffè", "Café Illy granizado con nata por encima.", "Con cafeína"],
      ["Frullato", "Batido de fruta de temporada con o sin leche.", "A elegir"],
      ["Agua, refrescos y cerveza italiana", "Para acompañar.", "Varios"]
    ]
  },
  {
    k: "Tartas heladas y para llevar", note: "Por encargo con 48 horas de antelación. Llama al 680 51 15 61.",
    items: [
      ["Tarta helada a medida", "Elige dos o tres sabores y la base: bizcocho, galleta o merengue.", "Desde 6 raciones"],
      ["Semifreddo al torroncino", "Turrón, avellana y merengue seco. La de las fiestas.", "Encargo"],
      ["Tarrina 500 ml", "Dos sabores, en envase isotérmico para el camino.", "Para llevar"],
      ["Tarrina 1 litro", "Hasta cuatro sabores. Aguanta unos 40 minutos fuera de casa.", "Para llevar"],
      ["Pack de cassatine", "Porciones individuales listas para servir.", "Encargo"]
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
        <p class="lead">Cinco maneras de tomarlo: en la mano, en copa, en taza, en vaso alto o en una caja para el camino.</p>
        <a class="btn btn--ghost" href="tel:${SITE.phoneHref}" data-magnetic="0.2"><span>Encargar por teléfono</span>${ARROW}</a>
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
              <span class="menu-row__side">${side}</span>
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
              <span class="menu-row__side">${side}</span>
            </li>`).join("\n            ")}
          </ul>
        </div>`).join("\n        ")}
      </div>

    </div>

    <p class="pending-note" style="margin-top:clamp(3rem,6vw,5rem)">
      <span aria-hidden="true">·</span>
      <span><b>Precios pendientes:</b> la carta se ha maquetado sin columna de precio porque no consta ninguno público. Cuando nos paséis la lista, se añade una columna de importe alineada a la derecha en <code>build/pages/carta.mjs</code> sin tocar el diseño.</span>
    </p>
  </div>
</section>

<section class="section panna-zone">
  <div class="shell">
    <div class="grid12" style="align-items:center;row-gap:2.5rem">
      <div style="grid-column:1 / span 5" data-lines>
        <p class="eyebrow" style="margin-bottom:1rem">Para llevar</p>
        <h2 class="display display--m"><span class="row"><span>Cuarenta</span></span><span class="row"><span><em class="italic">minutos</em> de</span></span><span class="row"><span>margen.</span></span></h2>
        <p class="lead measure" style="margin-top:1.6rem">Las tarrinas salen en envase isotérmico con placa de frío. Si el trayecto es más largo, dínoslo y añadimos hielo seco.</p>
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
