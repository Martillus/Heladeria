import { SITE, photo, ARROW } from "../chrome.mjs";

const OFFERS = [
  {
    idx: "01", t: "Tartas heladas a medida",
    d: "Eliges dos o tres sabores y la base: bizcocho empapado, galleta prensada o merengue seco. Se monta a mano y se decora con fruta o chocolate templado.",
    meta: "Desde 6 raciones · 48 h de antelación",
    file: "evento-tarta.jpg", id: "E-01",
    desc: "Tarta helada entera, decorada y fotografiada de tres cuartos sobre una superficie limpia."
  },
  {
    idx: "02", t: "Celebraciones y cumpleaños",
    d: "Cassatine individuales, tarrinas rotuladas o un carrito de pozzetti servido por nuestro equipo. Nos adaptamos al número de invitados y al espacio.",
    meta: "Desde 20 personas · presupuesto cerrado",
    file: "evento-celebracion.jpg", id: "E-02",
    desc: "Mesa de celebración con tarrinas o cassatine servidas, gente alrededor sin protagonismo de rostros."
  },
  {
    idx: "03", t: "Empresas y catering",
    d: "Eventos corporativos, aperturas y ferias en Madrid. Llevamos el pozzetto al sitio, con espátula y el mismo gelato que servimos en tienda.",
    meta: "Consultar disponibilidad",
    file: "evento-catering.jpg", id: "E-03",
    desc: "Montaje de catering: cubetas de acero fuera de la tienda o el equipo sirviendo en un evento."
  }
];

export default {
  page: "eventos.html",
  title: "Eventos y encargos · La Gelateria Italiana",
  desc: "Tartas heladas por encargo, cassatine, catering y celebraciones con gelato artesanal en Madrid. Ríos Rosas 54, Chamberí. 680 51 15 61.",
  body: `
<header class="pagehead">
  <span class="pagehead__glow" aria-hidden="true"></span>
  <div class="shell">
    <nav class="crumbs mono" aria-label="Migas de pan"><a href="index.html">Inicio</a><span aria-hidden="true">/</span><span>Eventos</span></nav>
    <div class="pagehead__grid">
      <div class="pagehead__title" data-lines>
        <h1 class="display display--xl"><span class="row"><span>Encargos</span></span><span class="row"><span>que salen</span></span><span class="row"><span>del <em class="italic">pozzetto</em>.</span></span></h1>
      </div>
      <div class="stack">
        <p class="lead">Tartas heladas, cassatine y catering en Madrid, con el mismo gelato que servimos cada día en Ríos Rosas. Nada se compra hecho.</p>
        <a class="btn btn--solid" href="tel:${SITE.phoneHref}" data-magnetic="0.22"><span>Llamar al ${SITE.phone}</span>${ARROW}</a>
      </div>
    </div>
  </div>
</header>

<section class="section" style="padding-top:clamp(2rem,4vw,3rem)">
  <div class="shell">
    <div class="stackcards">
      ${OFFERS.map((o, i) => `<article class="stackcard" style="top:calc(clamp(5rem,12vh,8rem) + ${i * 16}px)">
        <div class="stackcard__grid">
          <div class="stackcard__body">
            <p class="mono" style="color:var(--accent)">${o.idx} / 0${OFFERS.length}</p>
            <h2 class="display display--m">${o.t}</h2>
            <p class="lead" style="font-size:1.02rem">${o.d}</p>
            <p class="mono" style="color:var(--fg-faint)">${o.meta}</p>
            <div class="actions"><a class="btn btn--ghost" href="#encargo" data-magnetic="0.2"><span>Pedir presupuesto</span>${ARROW}</a></div>
          </div>
          <div class="stackcard__media" data-expand="10">
            ${photo({ id: o.id, file: o.file, alt: o.t, ar: "1 / 1", desc: o.desc, spec: "cuadrada o vertical · mín. 1600 px" })}
          </div>
        </div>
      </article>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="section contrast-zone">
  <div class="shell">
    <div class="grid12" style="row-gap:2.5rem;align-items:start">
      <div style="grid-column:1 / span 5" data-lines>
        <p class="eyebrow" style="margin-bottom:1rem">Cómo funciona</p>
        <h2 class="display display--m"><span class="row"><span>Tres pasos</span></span><span class="row"><span>y <em class="italic">dos días</em>.</span></span></h2>
        <p class="lead measure" style="margin-top:1.6rem">No trabajamos con stock congelado: cada encargo se manteca para ti. Por eso pedimos 48 horas, y por eso llega como debe llegar.</p>
      </div>
      <ol style="grid-column:7 / span 6" data-reveal>
        ${[["Cuéntanos qué y para cuándo", "Número de raciones, sabores y fecha. Por teléfono o con el formulario de abajo."],
           ["Cerramos la propuesta", "Te confirmamos formato, decoración y precio antes de empezar nada."],
           ["Se manteca y se recoge", "Sale del obrador el mismo día. Se recoge en tienda o lo llevamos si el evento lo requiere."]].map(([t, d], i) => `<li class="menu-row">
          <span><span class="menu-row__name">${t}</span><span class="menu-row__desc">${d}</span></span>
          <span class="menu-row__side">0${i + 1}</span>
        </li>`).join("\n        ")}
      </ol>
    </div>
  </div>
</section>

<section class="section" id="encargo">
  <div class="shell shell--tight">
    <div class="grid12" style="row-gap:2.5rem;align-items:start">
      <div style="grid-column:1 / span 5">
        <p class="eyebrow">Formulario</p>
        <h2 class="display display--m" style="margin-top:1rem">Cuéntanos el <em class="italic">encargo</em>.</h2>
        <p class="lead" style="margin-top:1.4rem">Si lo tuyo es para mañana, mejor llama: el teléfono siempre es más rápido que un formulario.</p>
        <a class="btn btn--solid" href="tel:${SITE.phoneHref}" data-magnetic="0.22" style="margin-top:1.4rem"><span>${SITE.phone}</span>${ARROW}</a>
      </div>

      <form style="grid-column:7 / span 6" class="form" data-encargo novalidate>
        <div class="form-cols">
          <div class="field">
            <label for="f-nombre">Nombre</label>
            <input id="f-nombre" name="nombre" type="text" autocomplete="name" required>
          </div>
          <div class="field">
            <label for="f-tel">Teléfono</label>
            <input id="f-tel" name="telefono" type="tel" autocomplete="tel" required>
          </div>
        </div>
        <div class="form-cols">
          <div class="field">
            <label for="f-tipo">Tipo de encargo</label>
            <select id="f-tipo" name="tipo">
              <option>Tarta helada a medida</option>
              <option>Cassatine o porciones</option>
              <option>Celebración o cumpleaños</option>
              <option>Empresa o catering</option>
            </select>
          </div>
          <div class="field">
            <label for="f-fecha">Fecha</label>
            <input id="f-fecha" name="fecha" type="date">
            <span class="field__hint" id="f-fecha-hint">Mínimo 48 horas desde hoy</span>
          </div>
        </div>
        <div class="field">
          <label for="f-detalle">Detalle</label>
          <textarea id="f-detalle" name="detalle" placeholder="Raciones, sabores, alergias, hora de recogida…"></textarea>
        </div>
        <div class="actions">
          <button class="btn btn--solid" type="submit" data-magnetic="0.2"><span>Preparar solicitud</span>${ARROW}</button>
          <a class="btn btn--ghost" href="tel:${SITE.phoneHref}" data-magnetic="0.18"><span>${SITE.phone}</span></a>
        </div>
        <p class="pending-note" role="status" data-encargo-status hidden></p>
        <p class="pending-note">
          <span aria-hidden="true">·</span>
          <span><b>Pendiente de conectar:</b> el formulario todavía no tiene destino, así que de momento prepara el resumen del encargo y lo copia al portapapeles. Indicadnos un correo de recepción o un servicio (Formspree, Netlify Forms, vuestro CRM) y se conecta en un minuto.</span>
        </p>
      </form>
    </div>
  </div>
</section>

<section class="finale">
  <span class="finale__blob" style="bottom:-28%;right:-8%" data-parallax="12"></span>
  <div class="shell finale__inner">
    <p class="eyebrow">48 horas de antelación</p>
    <h2 class="display display--l" style="max-width:16ch">Dinos la fecha y nos ponemos <em class="italic">esta noche</em>.</h2>
    <div class="actions actions--center">
      <a class="btn btn--solid" href="tel:${SITE.phoneHref}" data-magnetic="0.25"><span>Llamar ahora</span>${ARROW}</a>
      <a class="btn btn--ghost" href="carta.html" data-magnetic="0.18"><span>Ver la carta</span></a>
    </div>
  </div>
</section>
`
};
