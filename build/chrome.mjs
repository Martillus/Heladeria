export const SITE = {
  name: "La Gelateria Italiana",
  tagline: "Gelato artigianale · Madrid",
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

/* Los dos locales. El de Ríos Rosas es el que tiene ficha con reseñas,
   teléfono y pedido online; el de República Dominicana está pendiente de
   que el negocio nos pase teléfono y horario propios. */
export const LOCALES = [
  {
    key: "rios-rosas",
    name: "Ríos Rosas",
    street: "C. de Ríos Rosas, 54",
    area: "Chamberí · 28003 Madrid",
    short: "Ríos Rosas 54 · Chamberí",
    plus: "C8R3+JQ Madrid",
    phone: "680 51 15 61",
    phoneHref: "+34680511561",
    maps: "https://www.google.com/maps/search/?api=1&query=La+Gelateria+Italiana+R%C3%ADos+Rosas+54+Madrid",
    note: "El local original, con obrador propio.",
    main: true
  },
  {
    key: "republica-dominicana",
    name: "República Dominicana",
    street: "Pl. de la República Dominicana, 6",
    area: "Chamartín · 28016 Madrid",
    short: "Pl. República Dominicana 6 · Chamartín",
    plus: "",
    phone: "",
    phoneHref: "",
    maps: "https://www.google.com/maps/search/?api=1&query=La+Gelateria+Italiana+Plaza+de+la+Rep%C3%BAblica+Dominicana+6+Madrid",
    note: "El mismo gelato, al otro lado del Paseo de la Castellana.",
    main: false
  }
];

/* Plataformas de pedido online enlazadas desde la ficha de Google.
   URLs limpias: se han quitado los parámetros de seguimiento de Google.
   Ambas apuntan al local de Ríos Rosas. */
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
  { href: "sabores.html",   label: "Sabores",   idx: "02", preview: "sabores",  desc: "Veintidós sabores fijos, más los que salen cada día." },
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


/* Icono de sabor: la cubeta abierta de la vitrina. El gelato a la vista,
   con el relieve que deja al servirlo. Mismo dibujo para todos; cambia el
   color del gelato y, si lo lleva, el de los tropezones. Al pasar el ratón
   entra la cuchara de coger helado, ya con su bola. */
/* ============================================================
   EL ICONO DE SABOR — una tarrina de las que cruzan el mostrador.
   Vista frontal, el helado mantecado desbordando el borde y, al pasar el
   ratón, la cucharita de tarrina cayendo hasta quedarse clavada.

   El relieve no son trazos pintados: es un mapa de alturas de ruido fractal
   iluminado y multiplicado sobre el color del sabor. Eso es lo que lo separa
   de una gelatina. Y va en modo mate — el volumen se modela oscureciendo, no
   sumando blanco.

   Por sabor solo cambian tres cosas: el color del helado, el topping y, si
   lleva, la salsa o mermelada.
   ============================================================ */

const BASE_Y = 123;          // la línea del borde de la tarrina
const TIP = [107, 84];       // donde queda la punta de la pala al clavarse

/* Generador reproducible: cada sabor reparte su topping distinto, pero
   siempre igual entre compilaciones. */
function sower(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function seedOf(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return Math.abs(h);
}

/* La silueta del mantecado. Círculo arriba para que la cúpula se cierre
   redonda, ensanche solo cerca de la horizontal, y grumos en el contorno que
   se apagan al acercarse a la cumbre: un único pico, faldas irregulares. */
function moundPath() {
  const cx = 89, cy = BASE_Y - 14, rad = 44, N = 40, pts = [];
  for (let k = 0; k <= N; k++) {
    const th = Math.PI * (1 - k / N);
    const taper = Math.min(1, Math.sin(th) * 3);
    const lump = (2.2 * Math.sin(5 * th + 1.2) + 1.3 * Math.sin(8 * th + 0.3)) * taper;
    const r = rad + 8 * Math.pow(Math.abs(Math.cos(th)), 2.4) + lump;
    pts.push([cx + r * Math.cos(th), cy - r * Math.sin(th)]);
  }
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let k = 0; k < N; k++) {
    const p0 = pts[k > 0 ? k - 1 : 0], p1 = pts[k], p2 = pts[k + 1], p3 = pts[k < N - 1 ? k + 2 : N];
    d += ` C${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(1)} ${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(1)}` +
         ` ${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(1)} ${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(1)}` +
         ` ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d +
    ` C145 ${BASE_Y - 6} 144 ${BASE_Y + 1} 141 ${BASE_Y + 8}` +
    ` L141 ${BASE_Y + 40} L37 ${BASE_Y + 40}` +
    ` C34 ${BASE_Y + 1} 33 ${BASE_Y - 6} 37 ${BASE_Y - 14} Z`;
}

const MOUND = moundPath();

/* ¿Cae el punto dentro del montón? Sirve para no sembrar topping en el aire. */
function onMound(x, y) {
  const cx = 89, cy = BASE_Y - 14;
  const dx = x - cx, dy = cy - y;
  if (dy < -12) return false;
  const th = Math.atan2(Math.max(dy, 0.001), dx);
  const r = 44 + 8 * Math.pow(Math.abs(Math.cos(th)), 2.4);
  return Math.hypot(dx, dy) < r - 5;
}

/* Siembra n piezas de topping sobre la masa, más densas hacia la cumbre. */
function scatter(rnd, n, draw) {
  const out = [];
  let guard = 0;
  while (out.length < n && guard++ < n * 40) {
    const x = 40 + rnd() * 98;
    const y = BASE_Y - 58 + rnd() * rnd() * 52;   // rnd² agrupa arriba
    if (!onMound(x, y)) continue;
    out.push(draw(x, y, rnd));
  }
  return out.join("");
}

function toppingArt(top, seed) {
  if (!top) return "";
  const rnd = sower(seed);
  const c = top.c;
  if (top.k === "chips") {
    // Virutas de chocolate: cuadraditos irregulares, cada uno a su aire.
    return scatter(rnd, 11, (x, y, r) => {
      const w = 2.6 + r() * 2.2, h = 2 + r() * 1.8, a = r() * 90 - 45;
      return `<rect x="${(x - w / 2).toFixed(1)}" y="${(y - h / 2).toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" rx="0.7" fill="${c}" transform="rotate(${a.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
    });
  }
  if (top.k === "crumble") {
    // Crocanti y migas: más piezas, más pequeñas y más juntas.
    return scatter(rnd, 22, (x, y, r) => {
      const s = 1.2 + r() * 1.9, a = r() * 180;
      return `<path d="M${(-s).toFixed(1)} 0 L0 ${(-s * 0.9).toFixed(1)} L${s.toFixed(1)} ${(s * 0.2).toFixed(1)} L${(s * 0.1).toFixed(1)} ${s.toFixed(1)} Z" fill="${c}" opacity=".92" transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${a.toFixed(0)})"/>`;
    });
  }
  if (top.k === "shred") {
    // Ralladura: hebras finas, casi horizontales.
    return scatter(rnd, 16, (x, y, r) => {
      const l = 3.4 + r() * 3.4, a = r() * 70 - 35;
      return `<path d="M${(-l / 2).toFixed(1)} 0 L${(l / 2).toFixed(1)} 0" stroke="${c}" stroke-width="1.5" stroke-linecap="round" opacity=".9" transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${a.toFixed(0)})"/>`;
    });
  }
  if (top.k === "seeds") {
    // Pepitas: óvalos pequeños y oscuros.
    return scatter(rnd, 14, (x, y, r) => {
      const s = 1 + r() * 0.9;
      return `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(s * 1.3).toFixed(1)}" ry="${s.toFixed(1)}" fill="${c}" opacity=".9" transform="rotate(${(r() * 90 - 45).toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
    });
  }
  if (top.k === "dust") {
    // Espolvoreado de canela: puntos muy finos, sin forma propia.
    return scatter(rnd, 40, (x, y, r) =>
      `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(0.5 + r() * 0.8).toFixed(1)}" fill="${c}" opacity="${(0.4 + r() * 0.4).toFixed(2)}"/>`);
  }
  return "";
}

/* La mermelada o la salsa: un hilo que cruza la cumbre y cae por la ladera
   derecha, con dos gotas. Va brillante a propósito — es lo único del dibujo
   que no es mate, y por eso se lee como salsa y no como helado. */
function sauceArt(color) {
  if (!color) return "";
  const y = v => BASE_Y - v;
  const ribbon = `M62 ${y(30)} C70 ${y(42)} 82 ${y(46)} 94 ${y(40)} C104 ${y(35)} 110 ${y(27)} 112 ${y(17)}`;
  return `<g class="gelato__sauce">
          <path d="${ribbon}" fill="none" stroke="#2a2018" stroke-width="7" stroke-linecap="round" opacity=".18" transform="translate(0 1.8)"/>
          <path d="${ribbon}" fill="none" stroke="${color}" stroke-width="6" stroke-linecap="round"/>
          <path d="${ribbon}" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" opacity=".26" transform="translate(-0.8 -1.2)"/>
          <ellipse cx="112" cy="${y(12)}" rx="3.8" ry="4.6" fill="${color}"/>
          <ellipse cx="111" cy="${y(14)}" rx="1.1" ry="1.5" fill="#ffffff" opacity=".3"/>
        </g>`;
}

/* La cucharita plana de tarrina, dibujada con la punta de la pala en (0,0)
   para que gire sobre el punto por el que se clava. */
const SPOON = `<g class="gelato__wobble">
          <path d="M-9.6 -36 C-9.6 -42 -6.6 -44.6 0 -44.6 C6.6 -44.6 9.6 -42 9.6 -36 L9 -14.5 C9 -5.4 5.4 0 0 0 C-5.4 0 -9 -5.4 -9 -14.5 Z" fill="url(#gspoon)" stroke="#bdb5a6" stroke-width="0.9"/>
          <rect x="-4.9" y="-64" width="9.8" height="26" rx="4.9" fill="url(#gspoon)" stroke="#bdb5a6" stroke-width="0.9"/>
          <path d="M-5.4 -38 C-5.4 -40.6 -3 -41.6 0 -41.6 C3 -41.6 5.4 -40.6 5.4 -38 L5 -20 C5 -13.6 2.8 -10.4 0 -10.4 C-2.8 -10.4 -5 -13.6 -5 -20 Z" fill="#fff" opacity=".55"/>
          <path d="M-2 -61 L-2 -41" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>
        </g>`;

/* Migas de hielo de la cumbre. El grano fino lo pone el mapa de relieve. */
const CRUMBS = [[75, 86], [84, 88], [67, 93], [91, 92], [79, 96], [58, 104], [104, 101]]
  .map(([x, y]) => `<circle cx="${x}" cy="${y + BASE_Y - 125}" r="1.7" fill="#2a2018" opacity=".12"/>`).join("");

/* Los degradados, filtros y recortes son idénticos para los 22 sabores, así
   que van una sola vez por página y cada tarrina los referencia por id. Sin
   esto cada icono arrastraba 12 KB repetidos. */
export const GELATO_DEFS = `<svg class="gelato-defs" width="0" height="0" aria-hidden="true" focusable="false">
      <defs>
        <path id="gmound" d="${MOUND}"/>
        <radialGradient id="gshade" gradientUnits="userSpaceOnUse" cx="70" cy="${BASE_Y - 40}" r="90">
          <stop offset=".34" stop-color="#2a2018" stop-opacity="0"/>
          <stop offset=".6" stop-color="#2a2018" stop-opacity=".22"/>
          <stop offset="1" stop-color="#2a2018" stop-opacity=".54"/>
        </radialGradient>
        <linearGradient id="gpaper" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#e6ddcc"/><stop offset=".16" stop-color="#fdfbf5"/>
          <stop offset=".52" stop-color="#f4efe3"/><stop offset=".84" stop-color="#e6ddcc"/>
          <stop offset="1" stop-color="#ddd3c0"/>
        </linearGradient>
        <linearGradient id="gspoon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#e4ded2"/><stop offset=".26" stop-color="#ffffff"/>
          <stop offset=".62" stop-color="#f6f3ec"/><stop offset="1" stop-color="#d7d0c1"/>
        </linearGradient>
        <filter id="gblur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="3.2"/></filter>
        <filter id="gsoft" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="0.9"/></filter>
        <filter id="grelief" x="-4%" y="-4%" width="108%" height="108%">
          <feTurbulence type="fractalNoise" baseFrequency="0.135" numOctaves="2" seed="11" result="n"/>
          <feColorMatrix in="n" type="matrix" result="h" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0"/>
          <feDiffuseLighting in="h" surfaceScale="6.5" diffuseConstant="1" lighting-color="#ffffff" result="d">
            <feDistantLight azimuth="228" elevation="52"/></feDiffuseLighting>
          <feComponentTransfer in="d" result="m">
            <feFuncR type="linear" slope="0.52" intercept="0.56"/>
            <feFuncG type="linear" slope="0.52" intercept="0.56"/>
            <feFuncB type="linear" slope="0.52" intercept="0.56"/></feComponentTransfer>
          <feComposite in="m" in2="SourceGraphic" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" result="c"/>
          <feComposite in="c" in2="SourceAlpha" operator="in"/>
        </filter>
        <clipPath id="gtub"><rect x="-20" y="-60" width="220" height="${BASE_Y + 61}"/></clipPath>
        <clipPath id="gcream"><use href="#gmound"/></clipPath>
        <mask id="gburied" maskUnits="userSpaceOnUse" x="-20" y="-80" width="220" height="300">
          <rect x="-20" y="-80" width="220" height="300" fill="#fff"/>
          <use href="#gmound" fill="#000"/>
        </mask>
      </defs>
    </svg>`;

export function gelatoMark(flavor) {
  const f = typeof flavor === "string" ? { n: flavor, c: flavor } : flavor;
  const seed = seedOf(f.n || f.c || "gelato");
  const ex = TIP[0] + 6, ey = TIP[1] - 14;      // por donde la pala entra en el helado

  return `<svg class="gelato__cup" viewBox="18 0 144 200" aria-hidden="true" focusable="false" style="--flavor:${f.c}">
        <ellipse cx="90" cy="188" rx="46" ry="7" fill="#2a2018" opacity=".10"/>
        <g class="gelato__tub">
          <path d="M35 124 L41 186 L139 186 L145 124 Z" fill="url(#gpaper)"/>

          <g class="gelato__cream" clip-path="url(#gtub)">
            <use href="#gmound" fill="var(--flavor)" filter="url(#grelief)"/>
            <g clip-path="url(#gcream)">
              <use href="#gmound" fill="none" stroke="#2a2018" stroke-width="18" opacity=".2" filter="url(#gblur)"/>
              <use href="#gmound" fill="url(#gshade)"/>
              <path d="M83 ${BASE_Y - 53} C77 ${BASE_Y - 33} 82 ${BASE_Y - 16} 74 ${BASE_Y + 3}" fill="none" stroke="#2a2018" stroke-width="4.4" stroke-linecap="round" opacity=".16" filter="url(#gsoft)"/>
              ${CRUMBS}
              ${toppingArt(f.top, seed)}
              ${sauceArt(f.sauce)}
            </g>
            <rect x="37" y="115" width="106" height="10" fill="#2a2018" opacity=".15" filter="url(#gblur)"/>
          </g>

          <rect x="31.5" y="115" width="117" height="10" rx="5" fill="#fdfbf5"/>
          <rect x="31.5" y="115" width="117" height="10" rx="5" fill="none" stroke="#ddd3c0" stroke-width="1.1"/>

          <rect x="48" y="139" width="84" height="28" fill="#f4efe3" opacity=".5"/>
          <rect x="48" y="139" width="84" height="28" fill="none" stroke="#2a2018" stroke-width="1.5"/>
          <text class="gelato__brand" x="90" y="155" font-size="9.2" letter-spacing="1" fill="#2a2018" text-anchor="middle">LA GELATERIA</text>
          <text class="gelato__brand-it" x="114" y="170" font-size="11" fill="#2a2018" text-anchor="middle">italiana</text>

          <g class="gelato__cut" transform="rotate(20 ${ex} ${ey})">
            <ellipse cx="${ex}" cy="${ey + 1.5}" rx="13" ry="5.4" fill="#2a2018" filter="url(#gblur)"/>
          </g>
          <g mask="url(#gburied)">
            <g class="gelato__spoon" style="--sx0:${TIP[0] + 14}px;--sy0:${TIP[1] - 118}px;--sx1:${TIP[0]}px;--sy1:${TIP[1]}px">
              ${SPOON}
            </g>
          </g>
        </g>
      </svg>`;
}

/* El rótulo de madera de la pared del local, redibujado como vectorial. Las
   proporciones salen de medir la foto: la versal ocupa el 41 % del alto del
   marco, el texto el 85 % de su ancho y va centrado, y la cursiva cae a la
   derecha pisando la línea de abajo. El trazo del marco es grueso, como el
   listón de madera. El color es el del propio rótulo, no el del texto. */
export const LOGO = (cls = "brand__mark") => `<svg class="${cls}" viewBox="0 0 480 130" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="476" height="97" fill="none" stroke="currentColor" stroke-width="4"/>
      <text class="brand__word" x="240" y="71.4" text-anchor="middle" font-size="58" letter-spacing="1.5" fill="currentColor">LA GELATERIA</text>
      <text class="brand__script" x="380" y="108" text-anchor="middle" font-size="52" fill="currentColor">italiana</text>
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
<link rel="preload" href="assets/fonts/sacramento-normal-400-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/css/fonts.css">
<link rel="stylesheet" href="assets/css/base.css">
<link rel="stylesheet" href="assets/css/components.css">
<link rel="stylesheet" href="assets/css/layout.css">
<script type="application/ld+json">
[{"@context":"https://schema.org","@type":"IceCreamShop","name":"${SITE.name} — Ríos Rosas","image":"","telephone":"+34 ${SITE.phone}","priceRange":"€€","servesCuisine":"Gelato italiano","address":{"@type":"PostalAddress","streetAddress":"Calle de Ríos Rosas, 54","addressLocality":"Madrid","addressRegion":"Madrid","postalCode":"28003","addressCountry":"ES"},"geo":{"@type":"GeoCoordinates","latitude":40.4417233,"longitude":-3.6955425},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.6","reviewCount":"753"}},
{"@context":"https://schema.org","@type":"IceCreamShop","name":"${SITE.name} — República Dominicana","image":"","priceRange":"€€","servesCuisine":"Gelato italiano","address":{"@type":"PostalAddress","streetAddress":"Plaza de la República Dominicana, 6","addressLocality":"Madrid","addressRegion":"Madrid","postalCode":"28016","addressCountry":"ES"}}]
</script>
</head>
<body data-page="${page}">
<a class="skip-link" href="#main">Saltar al contenido</a>

${GELATO_DEFS}
<div class="loader" aria-hidden="true">
  <div class="loader__field"></div>
  <div class="loader__core">
    <div class="gelato gelato-mark" aria-hidden="true">${gelatoMark({ n: "Loader", c: "#a8b573", top: { k: "chips", c: "#3a2419" } })}</div>
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
<div class="cursor__ring" aria-hidden="true"><i></i><span></span></div>

<header class="masthead">
  <a class="brand" href="index.html" aria-label="${SITE.name} — inicio">
    ${LOGO()}
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
    <span class="mono">${LOCALES.map(l => l.short).join(" · ")}</span>
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

    <p class="eyebrow">Se sirve desde Ríos Rosas 54</p>
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
          ${LOGO("brand__mark brand__mark--foot")}
        </a>
        <p class="lead" style="margin-top:1.4rem;max-width:34ch">Gelato mantecado cada mañana en Ríos Rosas. Sin grasas hidrogenadas, sin prisa y sin atajos.</p>
        <p class="live-dot" data-open-state style="margin-top:1.4rem"><i aria-hidden="true"></i><span data-open-text>Cierra a las ${SITE.closes}</span></p>
      </div>
      <div class="footer__col">
        <h3>Navegar</h3>
        <ul>${NAV.map(n => `<li><a class="ulink" href="${n.href}">${n.label}</a></li>`).join("")}</ul>
      </div>
      <div class="footer__col">
        <h3>Los dos locales</h3>
        <ul>
          ${LOCALES.map(l => `<li>
            <a class="ulink" href="${l.maps}" target="_blank" rel="noopener">${l.street}</a>
            <span style="display:block;color:var(--fg-faint);font-size:.82rem">${l.area}</span>
          </li>`).join("\n          ")}
          <li><a class="ulink" href="tel:${SITE.phoneHref}">${SITE.phone}</a></li>
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
