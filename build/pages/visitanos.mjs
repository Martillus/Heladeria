import { SITE, photo, ARROW } from "../chrome.mjs";

/* Curva de afluencia orientativa (base: gráfico de horas punta de Google). */
const PEAK = [
  [12, 18], [13, 30], [14, 34], [15, 26], [16, 38], [17, 55],
  [18, 74], [19, 92], [20, 100], [21, 84], [22, 52], [23, 20]
];

export default {
  page: "visitanos.html",
  title: "Visítanos · La Gelateria Italiana, Ríos Rosas 54",
  desc: "Cómo llegar a La Gelateria Italiana: Calle de Ríos Rosas 54, Chamberí, 28003 Madrid. Abierto todos los días hasta las 23:00. Teléfono 680 51 15 61.",
  body: `
<header class="pagehead">
  <span class="pagehead__glow" aria-hidden="true"></span>
  <div class="shell">
    <nav class="crumbs mono" aria-label="Migas de pan"><a href="index.html">Inicio</a><span aria-hidden="true">/</span><span>Visítanos</span></nav>
    <div class="pagehead__grid">
      <div class="pagehead__title" data-lines>
        <h1 class="display display--xl"><span class="row"><span>Ríos Rosas</span></span><span class="row"><span><em class="italic">cincuenta</em></span></span><span class="row"><span>y cuatro.</span></span></h1>
      </div>
      <div class="stack">
        <p class="lead">Chamberí, 28003 Madrid. A pie de calle, con la puerta abierta hasta las once de la noche.</p>
        <p class="live-dot" data-open-state><i aria-hidden="true"></i><span data-open-text>Cierra a las ${SITE.closes}</span></p>
        <a class="btn btn--solid" href="${SITE.maps}" target="_blank" rel="noopener" data-magnetic="0.22"><span>Abrir en Google Maps</span>${ARROW}</a>
      </div>
    </div>
  </div>
</header>

<section class="section" style="padding-top:clamp(2rem,4vw,3rem)">
  <div class="shell">
    <div class="ph-frame" data-expand="10">
      ${photo({
        id: "V-01", file: "fachada.jpg",
        alt: "Fachada de La Gelateria Italiana en Ríos Rosas 54",
        ar: "21 / 9",
        desc: "La fachada de la tienda desde la acera de enfrente, con el rótulo visible y la luz encendida. Es la foto que más ayuda a encontrar el sitio.",
        spec: "21:9 panorámica · mín. 2800 px"
      })}
    </div>
  </div>
</section>

<section class="section" style="padding-top:0">
  <div class="shell">
    <div class="visit" data-reveal>
      <div class="visit__cell">
        <p class="mono" style="color:var(--fg-faint)">Dirección</p>
        <p class="display display--s">C. de Ríos Rosas, 54</p>
        <p style="color:var(--fg-mute)">Chamberí · 28003 Madrid</p>
        <p class="mono" style="color:var(--fg-faint)">Plus Code ${SITE.plus}</p>
      </div>
      <div class="visit__cell">
        <p class="mono" style="color:var(--fg-faint)">Teléfono</p>
        <p class="display display--s">${SITE.phone}</p>
        <a class="mono ulink" style="color:var(--pistacchio)" href="tel:${SITE.phoneHref}">Llamar →</a>
      </div>
      <div class="visit__cell">
        <p class="mono" style="color:var(--fg-faint)">Cierre</p>
        <p class="display display--s">23:00</p>
        <p style="color:var(--fg-mute)">Todos los días del año</p>
      </div>
      <div class="visit__cell">
        <p class="mono" style="color:var(--fg-faint)">Valoración</p>
        <p class="display display--s">${SITE.rating} ★</p>
        <p style="color:var(--fg-mute)">${SITE.reviews} reseñas en Google</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="grid12" style="row-gap:clamp(2.5rem,5vw,4rem);align-items:start">

      <div style="grid-column:1 / span 5">
        <p class="eyebrow">Horario</p>
        <h2 class="display display--m" style="margin-top:1rem">Abierto <em class="italic">todos</em> los días.</h2>
        <ul class="menu-list" style="margin-top:1.6rem">
          ${["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map(d => `<li class="menu-row">
            <span><span class="menu-row__name" style="font-size:1.05rem">${d}</span></span>
            <span class="menu-row__side">12:00 – 23:00</span>
          </li>`).join("\n          ")}
        </ul>
        <p class="pending-note" style="margin-top:1.6rem">
          <span aria-hidden="true">·</span>
          <span><b>Confirmad la apertura:</b> de vuestra ficha de Google solo consta la hora de cierre (23:00). La apertura a las 12:00 y el horario de festivos están puestos como propuesta. Decidnos los reales y se cambian en <code>build/pages/visitanos.mjs</code>.</span>
        </p>
      </div>

      <div style="grid-column:7 / span 6">
        <p class="eyebrow">Horas punta</p>
        <h2 class="display display--m" style="margin-top:1rem">Ven a las <em class="italic">seis</em>, no a las nueve.</h2>
        <p class="lead measure" style="margin-top:1.4rem">Entre las 19:00 y las 21:00 hay cola casi todos los días. Si no quieres esperar, la primera hora de la tarde es tuya.</p>

        <div style="margin-top:2.2rem">
          <div class="peak" role="img" aria-label="Gráfico de afluencia por horas: máximo entre las 19:00 y las 21:00.">
            ${PEAK.map(([h, v]) => `<span class="peak__bar" data-v="${v}"${v === 100 ? ' data-now="1"' : ""} title="${h}:00 · afluencia ${v}%"></span>`).join("\n            ")}
          </div>
          <div class="peak-axis" aria-hidden="true">
            ${PEAK.map(([h]) => `<span>${h}</span>`).join("")}
          </div>
          <p class="mono" style="color:var(--fg-faint);margin-top:1rem">Curva orientativa basada en el gráfico de afluencia de Google</p>
        </div>

        <div class="figs">
          <div><p class="fig__n">L7</p><p class="fig__l">Metro Alonso Cano, a un par de minutos andando</p></div>
          <div><p class="fig__n">L1</p><p class="fig__l">Metro Ríos Rosas, unos siete minutos</p></div>
          <div><p class="fig__n">3, 12, 37</p><p class="fig__l">Líneas de autobús con parada cerca</p></div>
        </div>
        <p class="mono" style="color:var(--fg-faint);margin-top:1rem">Tiempos y líneas aproximados · verificad antes de publicar</p>
      </div>
    </div>
  </div>
</section>

<section class="section panna-zone">
  <div class="shell">
    <div class="grid12" style="row-gap:2.5rem;align-items:start">
      <div style="grid-column:1 / span 4">
        <p class="eyebrow">Servicios</p>
        <h2 class="display display--m" style="margin-top:1rem">Como te venga <em class="italic">mejor</em>.</h2>
      </div>
      <div style="grid-column:6 / span 7">
        <ul class="menu-list">
          ${[["Pedido online", "Uber Eats y Glovo, con recogida o entrega a domicilio.", "Uber Eats · Glovo"],
             ["Recogida sin entrar", "Pides desde la app y te lo acercamos a la puerta.", "Disponible"],
             ["Entrega sin contacto", "El repartidor lo deja donde nos digas.", "Disponible"],
             ["Espacio amigable LGTBIQ+", "Aquí se atiende igual a todo el mundo. Sin excepciones.", "Siempre"]].map(([t, d, side]) => `<li class="menu-row">
            <span><span class="menu-row__name">${t}</span><span class="menu-row__desc">${d}</span></span>
            <span class="menu-row__side">${side}</span>
          </li>`).join("\n          ")}
        </ul>
        <div class="actions" style="margin-top:1.8rem">
          <button class="btn btn--solid" type="button" data-order-open data-magnetic="0.22" aria-haspopup="dialog" aria-controls="order-panel"><span>Pedir online</span>${ARROW}</button>
          <a class="btn btn--ghost" href="tel:${SITE.phoneHref}" data-magnetic="0.18"><span>${SITE.phone}</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div style="border:1px solid var(--line);border-radius:4px;overflow:hidden">
      <div class="ph" style="--ar:21 / 9" data-photo="M-01">
        <figcaption class="ph__empty">
          <span class="ph__ring" aria-hidden="true"></span>
          <span class="ph__code">Mapa · pendiente</span>
          <span class="ph__desc">Aquí va el mapa embebido de Google Maps con el pin de Ríos Rosas 54. Solo necesitamos que aceptéis el iframe de Google (implica cookies de terceros) o, si preferís evitarlo, colocamos una imagen estática del mapa enlazada a Maps.</span>
          <span class="ph__spec">21:9 · iframe de Google Maps o imagen estática</span>
        </figcaption>
      </div>
    </div>
    <div class="actions" style="margin-top:1.5rem">
      <a class="btn btn--ghost" href="${SITE.maps}" target="_blank" rel="noopener" data-magnetic="0.2"><span>Cómo llegar en Google Maps</span>${ARROW}</a>
    </div>
  </div>
</section>

<section class="finale">
  <span class="finale__blob" style="top:-24%;right:-6%" data-parallax="14"></span>
  <div class="shell finale__inner">
    <p class="eyebrow">Te esperamos</p>
    <h2 class="display display--l" style="max-width:16ch">La tapa está puesta. Solo hay que <em class="italic">venir a abrirla</em>.</h2>
    <div class="actions actions--center">
      <a class="btn btn--solid" href="${SITE.maps}" target="_blank" rel="noopener" data-magnetic="0.25"><span>Trazar la ruta</span>${ARROW}</a>
      <a class="btn btn--ghost" href="tel:${SITE.phoneHref}" data-magnetic="0.18"><span>${SITE.phone}</span></a>
    </div>
  </div>
</section>
`
};
