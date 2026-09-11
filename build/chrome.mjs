export const SITE = {
  name: "La Gelateria Italiana",
  tagline: "Gelato artigianale · Chamberí, Madrid",
  address: "C. de Ríos Rosas, 54, Chamberí, 28003 Madrid",
  addressShort: "Ríos Rosas 54 · Chamberí",
  phone: "680 51 15 61",
  phoneHref: "+34680511561",
  plus: "C8R3+JQ Madrid",
  maps: "https://www.google.com/maps/search/?api=1&query=La+Gelateria+Italiana+R%C3%ADos+Rosas+54+Madrid",
  rating: "4,6",
  reviews: "753",
  closes: "23:00"
};

/* Plataformas de pedido online enlazadas desde la ficha de Google.
   URLs limpias: se han quitado los parámetros de seguimiento de Google. */
export const ORDER = [
  {
    key: "ubereats",
    name: "Uber Eats",
    brand: "#06c167",
    ink: "#0b1410",
    initials: "UE",
    pickup: "https://www.ubereats.com/es/store/la-gelateria-italiana/vyHZOydMWZ6Ki0tw5XqP-g?diningMode=PICKUP",
    delivery: "https://www.ubereats.com/es/store/la-gelateria-italiana/vyHZOydMWZ6Ki0tw5XqP-g?diningMode=DELIVERY",
    notePickup: "Pides, pagas y lo recoges sin entrar.",
    noteDelivery: "Entrega a domicilio, sin contacto."
  },
  {
    key: "glovo",
    name: "Glovo",
    brand: "#ffc244",
    ink: "#0b1410",
    initials: "G",
    pickup: "https://glovoapp.com/es/es/madrid/stores/la-gelateria-italiana-madrid",
    delivery: "https://glovoapp.com/es/es/madrid/stores/la-gelateria-italiana-madrid",
    notePickup: "Elige “recoger” dentro de la app.",
    noteDelivery: "Entrega a domicilio en Madrid."
  }
];

export const NAV = [
  { href: "index.html",     label: "Inicio",    idx: "01", preview: "inicio",   desc: "El banco, la escarcha y el primer bocado." },
  { href: "sabores.html",   label: "Sabores",   idx: "02", preview: "sabores",  desc: "Más de treinta pozzetti, rotando cada semana." },
  { href: "carta.html",     label: "Carta",     idx: "03", preview: "carta",    desc: "Conos, copas, caffetteria y tartas heladas." },
  { href: "obrador.html",   label: "Obrador",   idx: "04", preview: "obrador",  desc: "Cómo se manteca un gelato de verdad." },
  { href: "eventos.html",   label: "Eventos",   idx: "05", preview: "eventos",  desc: "Tartas por encargo, catering y celebraciones." },
  { href: "resenas.html",   label: "Reseñas",   idx: "06", preview: "resenas",  desc: "753 opiniones. 4,6 de media." },
  { href: "visitanos.html", label: "Visítanos", idx: "07", preview: "visitanos", desc: "Cómo llegar, horarios y horas punta." }
];

/* Hueco de fotografía: si el archivo existe se pinta; si no, queda el
   espacio señalizado con la indicación exacta de qué foto hace falta. */
export function photo({ id, file, alt, ar = "3 / 2", desc, spec, cls = "", compact = false, pos }) {
  const style = [`--ar:${ar}`, pos ? `--pos:${pos}` : ""].filter(Boolean).join(";");
  return `<figure class="ph ${compact ? "ph--compact" : ""} ${cls}" style="${style}" data-photo="${id}">
        <img class="ph__img" src="assets/img/${file}" alt="${alt}" loading="lazy" decoding="async">
        <figcaption class="ph__empty">
          <span class="ph__ring" aria-hidden="true"></span>
          <span class="ph__code">Foto ${id} · pendiente</span>
          <span class="ph__desc">${desc}</span>
          <span class="ph__spec">${spec} · assets/img/${file}</span>
        </figcaption>
      </figure>`;
}

export const LOGO = (cls = "brand__mark") => `<svg class="${cls}" data-logo-slot viewBox="0 0 48 48" role="img" aria-label="La Gelateria Italiana">
      <circle cx="24" cy="24" r="22.4" fill="none" stroke="currentColor" stroke-width="1.3" opacity=".45"/>
      <path d="M12.8 27.4c0-5.6 5-10.1 11.2-10.1s11.2 4.5 11.2 10.1" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      <path d="M12.8 27.4h22.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      <path d="M17.6 27.4 24 37.6l6.4-10.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"/>
      <circle cx="24" cy="13.1" r="2" fill="#8e2231"/>
    </svg>`;

export const ARROW = `<svg class="btn__ico" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
export const STAR = `<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 .9l2.1 4.6 5 .5-3.7 3.4 1 4.9L8 11.9 3.6 14.3l1-4.9L.9 6l5-.5z"/></svg>`;
export const stars = (n = 5) => `<span class="stars" aria-hidden="true">${STAR.repeat(n)}</span>`;

function navPreview() {
  return NAV.map((n, i) => `<div class="nav-preview-slide ${i === 0 ? "is-active" : ""}" data-preview="${n.preview}">
            <div class="nav-card">
              <span class="nav-card__idx mono">${n.idx} / 07</span>
              <span class="nav-card__title display display--s">${n.label}</span>
              <span class="nav-card__desc">${n.desc}</span>
            </div>
          </div>`).join("\n          ");
}

export function head({ title, desc, page }) {
  return `<!doctype html>
<html lang="es" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta name="theme-color" content="#f4eee2">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:locale" content="es_ES">
<link rel="icon" href="assets/logo/favicon.svg" type="image/svg+xml">
<link rel="preload" href="assets/fonts/bodoni-moda-normal-400-900-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonts/archivo-normal-300-800-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/css/fonts.css">
<link rel="stylesheet" href="assets/css/base.css">
<link rel="stylesheet" href="assets/css/components.css">
<link rel="stylesheet" href="assets/css/layout.css">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"IceCreamShop","name":"${SITE.name}","image":"","telephone":"+34 ${SITE.phone}","priceRange":"€€","servesCuisine":"Gelato italiano","address":{"@type":"PostalAddress","streetAddress":"Calle de Ríos Rosas, 54","addressLocality":"Madrid","addressRegion":"Madrid","postalCode":"28003","addressCountry":"ES"},"geo":{"@type":"GeoCoordinates","latitude":40.4417233,"longitude":-3.6955425},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.6","reviewCount":"753"}}
</script>
</head>
<body data-page="${page}">
<a class="skip-link" href="#main">Saltar al contenido</a>

<div class="loader" aria-hidden="true">
  <div class="loader__field"></div>
  <div class="loader__core">
    <div class="pozzetto-mark" aria-hidden="true">
      <span class="pozzetto-mark__scoop"></span>
      <span class="pozzetto-mark__lid"></span>
    </div>
    <p class="loader__word" aria-label="La Gelateria Italiana">${
      "LA GELATERIA".split("").map(c => `<span>${c === " " ? "&nbsp;" : c}</span>`).join("")
    }</p>
  </div>
  <div class="loader__meta">
    <span class="mono">Ríos Rosas 54 · Madrid</span>
    <span class="mono loader__count">000</span>
  </div>
  <div class="loader__bar"></div>
</div>
<p class="visually-hidden" role="status">Cargando La Gelateria Italiana…</p>

<div class="curtain" aria-hidden="true"><span class="curtain__mark">${LOGO("").replace('role="img"', 'aria-hidden="true" role="presentation"')}</span></div>
<div class="grain" aria-hidden="true"></div>
<div class="cursor" aria-hidden="true"></div>
<div class="cursor__ring" aria-hidden="true"><span></span></div>

<header class="masthead">
  <a class="brand" href="index.html" aria-label="${SITE.name} — inicio">
    ${LOGO()}
    <span class="brand__text">
      <span class="brand__name" translate="no">La Gelateria</span>
      <span class="brand__sub" translate="no">Italiana · Madrid</span>
    </span>
  </a>
  <div class="masthead__side">
    <button class="btn btn--solid" type="button" data-order-open data-magnetic="0.22" aria-haspopup="dialog" aria-controls="order-panel" aria-label="Pedir online en Uber Eats o Glovo">
      <span>Pedir</span>${ARROW}
    </button>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav-overlay">
      <span class="menu-btn__label">Menú</span>
      <span class="menu-btn__bars" aria-hidden="true"><i></i><i></i><i></i></span>
    </button>
  </div>
</header>

<nav class="nav-overlay" id="nav-overlay" aria-hidden="true" aria-label="Navegación principal">
  <div class="nav-overlay__inner">
    <ul class="nav-list">
      ${NAV.map(n => `<li><a class="nav-item" href="${n.href}" data-preview="${n.preview}"${n.href === page ? ' aria-current="page"' : ""}>
          <span class="nav-item__idx">${n.idx}</span>
          <span class="nav-item__word">${n.label}</span>
        </a></li>`).join("\n      ")}
    </ul>
    <div class="nav-overlay__preview" aria-hidden="true">
          ${navPreview()}
    </div>
  </div>
  <div class="nav-overlay__foot">
    <span class="mono">${SITE.address}</span>
    <a class="mono ulink" href="tel:${SITE.phoneHref}">${SITE.phone}</a>
    <span class="live-dot" data-open-state><i aria-hidden="true"></i><span data-open-text>Cierra a las ${SITE.closes}</span></span>
  </div>
</nav>

<main id="main">`;
}

export function orderPanel() {
  const row = (o, mode) => `<li>
          <a class="order-row" href="${mode === "pickup" ? o.pickup : o.delivery}" target="_blank" rel="noopener" data-order-link="${o.key}">
            <span class="order-row__mark" style="--brand:${o.brand};--ink:${o.ink}" aria-hidden="true">${o.initials}</span>
            <span class="order-row__body">
              <span class="order-row__name">${o.name}</span>
              <span class="order-row__note">${mode === "pickup" ? o.notePickup : o.noteDelivery}</span>
            </span>
            <svg class="order-row__go" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span class="visually-hidden">(se abre en una pestaña nueva)</span>
          </a>
        </li>`;

  return `<div class="order-panel" id="order-panel" role="dialog" aria-modal="true" aria-labelledby="order-title" hidden>
  <button class="order-panel__scrim" type="button" data-order-close tabindex="-1" aria-label="Cerrar"></button>
  <div class="order-panel__card">
    <button class="order-panel__x" type="button" data-order-close aria-label="Cerrar el panel de pedido">
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    </button>

    <p class="eyebrow">${SITE.addressShort}</p>
    <h2 class="display display--m" id="order-title">Pedir <em class="italic">online</em></h2>
    <p class="order-panel__lead">Servimos por Uber Eats y Glovo. La tarrina sale en envase isotérmico: aguanta unos cuarenta minutos.</p>

    <div class="order-modes" role="tablist" aria-label="Forma de recibir el pedido">
      <button class="order-mode" type="button" role="tab" id="tab-pickup" aria-selected="true" aria-controls="panel-pickup" data-order-mode="pickup">Recogida</button>
      <button class="order-mode" type="button" role="tab" id="tab-delivery" aria-selected="false" aria-controls="panel-delivery" tabindex="-1" data-order-mode="delivery">Entrega</button>
      <span class="order-modes__ink" aria-hidden="true"></span>
    </div>

    <div class="order-tab" id="panel-pickup" role="tabpanel" aria-labelledby="tab-pickup">
      <ul class="order-list">
        ${ORDER.map(o => row(o, "pickup")).join("\n        ")}
      </ul>
    </div>
    <div class="order-tab" id="panel-delivery" role="tabpanel" aria-labelledby="tab-delivery" hidden>
      <ul class="order-list">
        ${ORDER.map(o => row(o, "delivery")).join("\n        ")}
      </ul>
    </div>

    <p class="order-panel__foot">
      ¿Una tarta helada o un encargo grande? Eso va por teléfono, con 48&nbsp;h:
      <a class="ulink" href="tel:${SITE.phoneHref}">${SITE.phone}</a>
    </p>
  </div>
</div>`;
}

export function foot() {
  return `</main>

${orderPanel()}

<footer class="footer">
  <div class="shell">
    <div class="footer__grid">
      <div class="footer__col">
        <a class="brand" href="index.html" aria-label="${SITE.name} — inicio">
          ${LOGO()}
          <span class="brand__text">
            <span class="brand__name" translate="no">La Gelateria</span>
            <span class="brand__sub" translate="no">Italiana · Madrid</span>
          </span>
        </a>
        <p class="lead" style="margin-top:1.4rem;max-width:34ch">Gelato mantecado cada mañana en Ríos Rosas. Sin grasas hidrogenadas, sin prisa y sin atajos.</p>
        <p class="live-dot" data-open-state style="margin-top:1.4rem"><i aria-hidden="true"></i><span data-open-text>Cierra a las ${SITE.closes}</span></p>
      </div>
      <div class="footer__col">
        <h3>Navegar</h3>
        <ul>${NAV.map(n => `<li><a class="ulink" href="${n.href}">${n.label}</a></li>`).join("")}</ul>
      </div>
      <div class="footer__col">
        <h3>La tienda</h3>
        <ul>
          <li><a class="ulink" href="${SITE.maps}" target="_blank" rel="noopener">${SITE.addressShort}</a></li>
          <li><a class="ulink" href="tel:${SITE.phoneHref}">${SITE.phone}</a></li>
          <li><span style="color:var(--fg-mute)">Plus Code ${SITE.plus}</span></li>
          <li><span style="color:var(--fg-mute)">Todos los días hasta las ${SITE.closes}</span></li>
        </ul>
      </div>
      <div class="footer__col">
        <h3>Servicios</h3>
        <ul>
          <li><button class="ulink" type="button" data-order-open aria-haspopup="dialog" aria-controls="order-panel" style="color:var(--fg-mute)">Pedido online</button></li>
          <li><span style="color:var(--fg-mute)">Recogida sin entrar</span></li>
          <li><span style="color:var(--fg-mute)">Entrega sin contacto</span></li>
          <li><span style="color:var(--fg-mute)">Espacio amigable LGTBIQ+</span></li>
        </ul>
      </div>
    </div>
  </div>
  <p class="footer__wordmark" aria-hidden="true">Gelateria</p>
  <div class="shell">
    <div class="footer__bar">
      <span class="mono">© <span data-year>2026</span> ${SITE.name}</span>
      <span class="mono">${SITE.rating} ★ · ${SITE.reviews} reseñas en Google</span>
      <a class="mono ulink" href="${SITE.maps}" target="_blank" rel="noopener">Cómo llegar</a>
    </div>
  </div>
</footer>

<script src="assets/vendor/gsap.min.js" defer></script>
<script src="assets/vendor/ScrollTrigger.min.js" defer></script>
<script src="assets/vendor/CustomEase.min.js" defer></script>
<script src="assets/vendor/lenis.min.js" defer></script>
<script src="assets/js/site.js" defer></script>
</body>
</html>`;
}
