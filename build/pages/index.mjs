import { SITE, photo, ARROW, stars } from "../chrome.mjs";
import { FLAVORS, REVIEWS, HIGHLIGHTS, INGREDIENTS } from "../data.mjs";

const bench = FLAVORS.filter(f => f.real).slice(0, 5);
const featured = FLAVORS.filter(f => f.star).concat(
  FLAVORS.filter(f => ["Fior di latte", "Nocciola Piemonte IGP", "Limón de Sorrento", "Tiramisù", "Stracciatella"].includes(f.n))
).slice(0, 8);

const pozzetto = f => `<a class="pozzetto" href="sabores.html" style="--flavor:${f.c}" data-cursor="Ver carta">
        <span class="pozzetto__well">
          <span class="pozzetto__frost" aria-hidden="true"></span>
          <span class="pozzetto__lid" aria-hidden="true"></span>
        </span>
        <span class="pozzetto__body">
          <span class="pozzetto__name">${f.n}</span>
          <span class="pozzetto__note">${f.note}</span>
          ${f.tags && f.tags.length ? `<span class="pozzetto__tags">${f.tags.map(t => `<span class="tag ${t === "Vegano" ? "tag--v" : ""}">${t}</span>`).join("")}</span>` : ""}
        </span>
      </a>`;

export default {
  page: "index.html",
  title: "La Gelateria Italiana · Gelato artesanal en Ríos Rosas, Madrid",
  desc: "Gelato italiano mantecado cada mañana en Chamberí. Más de 30 sabores en pozzetto, pistacho de Bronte y chocolate belga. Ríos Rosas 54, Madrid.",
  body: `
<!-- ============ HERO: LA VITRINA ============ -->
<section class="hero">
  <div class="hero__bg" data-parallax="10">
    ${photo({
      id: "H-01", file: "hero-mostrador.jpg",
      alt: "Mostrador de La Gelateria Italiana en Ríos Rosas",
      ar: "16 / 9",
      desc: "El mostrador con los pozzetti de acero cerrados, visto de frente y con la luz cálida de la tienda encendida.",
      spec: "16:9 apaisada · mín. 2400 px",
      cls: "ph--bg"
    })}
  </div>
  <div class="hero__wash" aria-hidden="true"></div>
  <div class="hero__frost" aria-hidden="true"></div>

  <div class="hero__inner">
    <div>
      <p class="eyebrow" style="margin-bottom:clamp(1rem,2vw,1.8rem)">Chamberí · Madrid · desde el obrador</p>
      <h1 class="display display--xl hero__title" data-lines>
        <span class="row"><span>Se manteca</span></span>
        <span class="row"><span>a las siete de</span></span>
        <span class="row"><span>la <em class="italic hero__accent">mañana</em>.</span></span>
      </h1>
      <p class="lead measure-tight" style="margin-top:clamp(1.2rem,2.2vw,2rem)">
        Gelato italiano de verdad: tapado en pozzetto, sin colorantes y sin montañas de colores en vitrina.
        Lo que ves a mediodía se hizo hoy.
      </p>
      <div class="actions" style="margin-top:clamp(1.4rem,2.6vw,2.2rem)">
        <a class="btn btn--solid" href="sabores.html" data-magnetic="0.25"><span>Ver los 35 sabores</span>${ARROW}</a>
        <a class="btn btn--ghost" href="visitanos.html" data-magnetic="0.18"><span>Cómo llegar</span></a>
      </div>
    </div>

    <div class="hero__meta">
      <p class="hero__score"><span data-count="4.6">4,6</span><sup>/5</sup></p>
      ${stars(5)}
      <p class="mono" style="color:var(--fg-mute)">${SITE.reviews} reseñas en Google</p>
      <p class="live-dot" data-open-state><i aria-hidden="true"></i><span data-open-text>Cierra a las ${SITE.closes}</span></p>
    </div>
  </div>

  <div class="hero__bench">
    ${bench.map(f => `<div class="bench-cell">
      <span class="pozzetto" style="--flavor:${f.c};width:100%">
        <span class="pozzetto__well">
          <span class="pozzetto__frost" aria-hidden="true"></span>
          <span class="pozzetto__lid" aria-hidden="true"></span>
        </span>
      </span>
      <span class="bench-name">${f.n}</span>
    </div>`).join("\n    ")}
  </div>

  <div class="scroll-cue" aria-hidden="true">
    <span class="mono">Desliza</span>
    <span class="scroll-cue__line"></span>
  </div>
</section>

<!-- ============ MARQUESINA ============ -->
<section class="section--flush" style="padding-block:clamp(2.5rem,5vw,4.5rem);border-block:1px solid var(--line);overflow:hidden">
  <div class="marquee marquee--outline" data-speed="34" aria-hidden="true">
    <div class="marquee__track">
      <span class="marquee__item">Pistacchio di Bronte<span class="marquee__dot"></span>Chocolate belga<span class="marquee__dot"></span>Caffè Illy<span class="marquee__dot"></span>Tiramisù<span class="marquee__dot"></span>Fior di latte<span class="marquee__dot"></span>Turrón<span class="marquee__dot"></span>Limone di Sorrento<span class="marquee__dot"></span></span>
    </div>
  </div>
  <p class="visually-hidden">Sabores destacados: pistacho de Bronte, chocolate belga, café Illy, tiramisú, fior di latte, turrón y limón de Sorrento.</p>
</section>

<!-- ============ TESIS ============ -->
<section class="section">
  <div class="shell">
    <div class="editorial">
      <div class="editorial__media">
        <div class="ph-frame" data-expand="14">
          ${photo({
            id: "A-01", file: "obrador-manos.jpg",
            alt: "Elaboración del gelato en el obrador",
            ar: "3 / 4",
            desc: "Vertical del obrador: manos trabajando el gelato con la espátula, o la mantecadora en marcha.",
            spec: "3:4 vertical · mín. 1600 px"
          })}
        </div>
      </div>
      <div class="editorial__body">
        <p class="eyebrow">Lo que pasa antes de que abramos</p>
        <p class="scrub-text" style="margin-top:1.6rem">Un gelato honesto no se decora: se pesa, se maduran doce horas y se manteca la misma mañana en que se vende.</p>
        <p class="lead measure" style="margin-top:1.8rem">
          Por eso nuestras cubetas están tapadas. El aire y la luz son los dos enemigos del gelato,
          y una montaña de colores en vitrina es exactamente lo contrario de conservarlo bien.
          Al pedir, levantamos la tapa delante de ti.
        </p>
        <div class="figs">
          <div><p class="fig__n"><span data-count="35">35</span></p><p class="fig__l">sabores en carta, rotando cada semana</p></div>
          <div><p class="fig__n">−12<span style="font-size:.5em"> °C</span></p><p class="fig__l">temperatura del pozzetto, tapado</p></div>
          <div><p class="fig__n">0</p><p class="fig__l">grasas hidrogenadas y colorantes</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ SABORES DESTACADOS ============ -->
<section class="section" style="padding-top:0">
  <div class="shell">
    <header class="grid12" style="align-items:end;margin-bottom:clamp(2.5rem,5vw,4.5rem)">
      <div style="grid-column:1 / span 7" data-lines>
        <p class="eyebrow" style="margin-bottom:1.2rem">Levanta la tapa</p>
        <h2 class="display display--l"><span class="row"><span>Ocho de los</span></span><span class="row"><span><em class="italic">treinta y cinco</em>.</span></span></h2>
      </div>
      <div style="grid-column:9 / span 4" class="stack">
        <p class="lead">Pasa el cursor por cada pozzetto para abrirlo. Los sabores de temporada entran y salen según el mercado.</p>
        <a class="btn btn--ghost" href="sabores.html" data-magnetic="0.2"><span>La carta completa</span>${ARROW}</a>
      </div>
    </header>
    <div class="pozzetti" data-reveal>
      ${featured.map(pozzetto).join("\n      ")}
    </div>
  </div>
</section>

<!-- ============ INGREDIENTES ============ -->
<section class="section">
  <div class="shell">
    <header style="max-width:52ch;margin-bottom:clamp(2rem,4vw,3.5rem)" data-lines>
      <p class="eyebrow" style="margin-bottom:1.2rem">De dónde viene cada cosa</p>
      <h2 class="display display--m"><span class="row"><span>El pistacho no</span></span><span class="row"><span>viene de un bote.</span></span></h2>
    </header>
    <div class="slices">
      ${INGREDIENTS.map(i => `<button class="slice" type="button" aria-expanded="false">
        <span class="slice__media">${photo({
          id: i.id, file: i.file, alt: i.name, ar: "3 / 4", desc: i.desc, spec: "vertical · mín. 1400 px", compact: true
        })}</span>
        <span class="slice__veil" aria-hidden="true"></span>
        <span class="slice__body">
          <span class="slice__idx">${i.idx}</span>
          <span class="slice__name">${i.name}</span>
          <span class="slice__text">${i.text}</span>
        </span>
      </button>`).join("\n      ")}
    </div>
  </div>
</section>

<!-- ============ PROCESO (RESUMEN) ============ -->
<section class="section panna-zone">
  <div class="shell">
    <div class="grid12" style="align-items:start;row-gap:clamp(2rem,4vw,3.5rem)">
      <div style="grid-column:1 / span 5" data-lines>
        <p class="eyebrow" style="margin-bottom:1.2rem">Cuatro pasos y una espera</p>
        <h2 class="display display--m"><span class="row"><span>Del cuaderno</span></span><span class="row"><span>al <em class="italic">pozzetto</em>.</span></span></h2>
        <a class="btn btn--ghost" href="obrador.html" data-magnetic="0.2" style="margin-top:2rem"><span>Entrar al obrador</span>${ARROW}</a>
      </div>
      <ol style="grid-column:7 / span 6" data-reveal>
        ${["Pesar cada base en gramos, no a ojo.",
           "Pasteurizar a 85 °C y enfriar de golpe.",
           "Madurar doce horas a 4 °C.",
           "Mantecar a las siete y tapar la cubeta."].map((t, i) => `<li class="menu-row">
          <span><span class="menu-row__name">${t}</span></span>
          <span class="menu-row__side">0${i + 1}</span>
        </li>`).join("\n        ")}
      </ol>
    </div>
  </div>
</section>

<!-- ============ RESEÑAS ============ -->
<section class="section">
  <div class="shell">
    <div class="score-block" style="margin-bottom:clamp(2.5rem,5vw,4.5rem)">
      <div>
        <p class="score-big"><span data-count="4.6">4,6</span></p>
        ${stars(5)}
        <p class="mono" style="margin-top:.8rem;color:var(--fg-mute)">${SITE.reviews} reseñas · Google</p>
      </div>
      <div class="bars">
        ${[["5", "78%"], ["4", "14%"], ["3", "4%"], ["2", "2%"], ["1", "2%"]].map(([k, w]) => `<div class="bar-row">
          <span class="mono">${k} ★</span>
          <span class="bar-track"><span class="bar-fill" data-w="${w}"></span></span>
          <span class="mono">${w}</span>
        </div>`).join("\n        ")}
        <p class="mono" style="color:var(--fg-faint);margin-top:.6rem">Distribución aproximada sobre el total publicado en Google</p>
      </div>
    </div>

    <div class="quotes" data-reveal>
      ${REVIEWS.map(r => `<figure class="quote">
        ${stars(r.stars)}
        <blockquote class="quote__text">“${r.text}”</blockquote>
        ${r.reply ? `<p class="quote__reply">${r.replyWhen}<br>${r.reply}</p>` : ""}
        <figcaption class="quote__who">
          <span class="quote__av" aria-hidden="true">${r.who.charAt(0)}</span>
          <span><span style="display:block;color:var(--fg)">${r.who}</span><span class="mono">${r.when}</span></span>
        </figcaption>
      </figure>`).join("\n      ")}
    </div>

    <div style="margin-top:clamp(2rem,4vw,3.5rem);display:flex;flex-wrap:wrap;gap:1rem;align-items:center;justify-content:space-between">
      <p class="mono" style="color:var(--fg-mute)">Lo más repetido: ${HIGHLIGHTS[0]}</p>
      <a class="btn btn--ghost" href="resenas.html" data-magnetic="0.2"><span>Leer las reseñas</span>${ARROW}</a>
    </div>
  </div>
</section>

<!-- ============ VISITA ============ -->
<section class="section--half section">
  <div class="shell">
    <div class="visit" data-reveal>
      <div class="visit__cell">
        <p class="mono" style="color:var(--fg-faint)">Dirección</p>
        <p class="display display--s">Ríos Rosas 54</p>
        <p style="color:var(--fg-mute)">Chamberí · 28003 Madrid</p>
        <a class="mono ulink" style="color:var(--pistacchio)" href="${SITE.maps}" target="_blank" rel="noopener">Abrir en Maps →</a>
      </div>
      <div class="visit__cell">
        <p class="mono" style="color:var(--fg-faint)">Horario</p>
        <p class="display display--s">Hasta las 23:00</p>
        <p style="color:var(--fg-mute)">Todos los días</p>
        <p class="live-dot" data-open-state><i aria-hidden="true"></i><span data-open-text>Cierra a las ${SITE.closes}</span></p>
      </div>
      <div class="visit__cell">
        <p class="mono" style="color:var(--fg-faint)">Teléfono</p>
        <p class="display display--s">${SITE.phone}</p>
        <p style="color:var(--fg-mute)">Encargos y tartas heladas</p>
        <a class="mono ulink" style="color:var(--pistacchio)" href="tel:${SITE.phoneHref}">Llamar →</a>
      </div>
      <div class="visit__cell">
        <p class="mono" style="color:var(--fg-faint)">Servicios</p>
        <p class="display display--s">Para llevar</p>
        <p style="color:var(--fg-mute)">Uber Eats y Glovo · recogida sin entrar · entrega sin contacto</p>
        <button class="mono ulink" type="button" data-order-open aria-haspopup="dialog" aria-controls="order-panel" style="color:var(--pistacchio)">Pedir online →</button>
      </div>
    </div>
  </div>
</section>

<!-- ============ CIERRE ============ -->
<section class="finale">
  <span class="finale__blob" style="top:-20%;left:-8%" data-parallax="16"></span>
  <span class="finale__blob" style="bottom:-30%;right:-10%" data-parallax="-12"></span>
  <div class="shell finale__inner">
    <p class="eyebrow">Ríos Rosas 54, Chamberí</p>
    <h2 class="display display--l measure-tight" style="max-width:18ch">Hoy también se ha mantecado a las <em class="italic">siete</em>.</h2>
    <div class="actions actions--center">
      <button class="btn btn--solid" type="button" data-order-open data-magnetic="0.25" aria-haspopup="dialog" aria-controls="order-panel"><span>Pedir online</span>${ARROW}</button>
      <a class="btn btn--ghost" href="carta.html" data-magnetic="0.18"><span>Ver la carta</span></a>
    </div>
  </div>
</section>
`
};
