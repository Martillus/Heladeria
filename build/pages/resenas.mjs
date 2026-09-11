import { SITE, photo, ARROW, stars } from "../chrome.mjs";
import { REVIEWS, HIGHLIGHTS, MENTIONS } from "../data.mjs";

const NEARBY = [
  ["Gelati Dino", "4,5", "733"],
  ["Dolcezza Gelateria Italiana", "4,6", "353"],
  ["Gelateria La Romana dal 1947", "4,6", "1.982"]
];

export default {
  page: "resenas.html",
  title: "Reseñas · La Gelateria Italiana",
  desc: "4,6 sobre 5 con 753 reseñas en Google. Lo que dicen los clientes de La Gelateria Italiana en Ríos Rosas 54, Chamberí, Madrid.",
  body: `
<header class="pagehead">
  <span class="pagehead__glow" aria-hidden="true"></span>
  <div class="shell">
    <nav class="crumbs mono" aria-label="Migas de pan"><a href="index.html">Inicio</a><span aria-hidden="true">/</span><span>Reseñas</span></nav>
    <div class="pagehead__grid">
      <div class="pagehead__title" data-lines>
        <h1 class="display display--xl"><span class="row"><span><em class="italic">753</em> personas</span></span><span class="row"><span>ya lo han</span></span><span class="row"><span>probado.</span></span></h1>
      </div>
      <div class="stack">
        <p class="lead">No editamos nada. Las buenas, las regulares y la respuesta que dimos a una que no lo era.</p>
        <a class="btn btn--ghost" href="${SITE.maps}" target="_blank" rel="noopener" data-magnetic="0.2"><span>Ver en Google</span>${ARROW}</a>
      </div>
    </div>
  </div>
</header>

<section class="section" style="padding-top:clamp(2rem,4vw,3rem)">
  <div class="shell">
    <div class="score-block">
      <div>
        <p class="score-big"><span data-count="4.6">4,6</span></p>
        ${stars(5)}
        <p class="mono" style="margin-top:.8rem;color:var(--fg-mute)">Media sobre ${SITE.reviews} reseñas</p>
      </div>
      <div class="bars">
        ${[["5", "78%"], ["4", "14%"], ["3", "4%"], ["2", "2%"], ["1", "2%"]].map(([k, w]) => `<div class="bar-row">
          <span class="mono">${k} ★</span>
          <span class="bar-track"><span class="bar-fill" data-w="${w}"></span></span>
          <span class="mono">${w}</span>
        </div>`).join("\n        ")}
      </div>
    </div>

    <div style="margin-top:clamp(2.5rem,5vw,4rem)">
      <p class="mono" style="color:var(--fg-faint);margin-bottom:1rem">Lo que más se menciona</p>
      <div class="filters" role="list">
        ${MENTIONS.map(m => `<span class="chip" role="listitem">${m.k}<span class="chip__n">${m.n}</span></span>`).join("\n        ")}
      </div>
    </div>
  </div>
</section>

<section style="padding-block:clamp(2rem,4vw,3.5rem);border-block:1px solid var(--line);overflow:hidden">
  <div class="marquee" data-speed="40" aria-hidden="true">
    <div class="marquee__track">
      <span class="marquee__item">${HIGHLIGHTS.map(h => `“${h}”`).join('<span class="marquee__dot"></span>')}<span class="marquee__dot"></span></span>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="grid12" style="align-items:start;row-gap:clamp(2rem,4vw,3rem)">
      <div style="grid-column:1 / span 4">
        <div style="position:sticky;top:clamp(6rem,12vh,8rem)">
        <p class="eyebrow">Publicadas en Google</p>
        <h2 class="display display--m" style="margin-top:1rem">Con nombre <em class="italic">y apellido</em>.</h2>
        <p class="lead" style="margin-top:1.4rem">Reproducimos las reseñas tal y como están publicadas, incluida la que nos puso dos estrellas.</p>
        <div class="ph-frame" data-expand="14" style="margin-top:2rem">
          ${photo({
            id: "R-01", file: "resenas-ambiente.jpg",
            alt: "Clientes en la heladería",
            ar: "4 / 5",
            desc: "Ambiente real de la tienda: cola en el mostrador o gente tomando el helado en la puerta.",
            spec: "4:5 vertical · mín. 1600 px"
          })}
        </div>
        </div>
      </div>

      <div style="grid-column:6 / span 7" data-reveal>
        ${REVIEWS.map(r => `<article class="quote" style="margin-bottom:1.2rem">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap">
            ${stars(r.stars)}
            <span class="mono" style="color:var(--fg-faint)">${r.when}</span>
          </div>
          <blockquote class="quote__text">“${r.text}”</blockquote>
          ${r.reply ? `<div class="quote__reply"><span class="mono" style="display:block;margin-bottom:.5rem;color:var(--accent)">${r.replyWhen}</span>${r.reply}</div>` : ""}
          <div class="quote__who">
            <span class="quote__av" aria-hidden="true">${r.who.charAt(0)}</span>
            <span><span style="display:block;color:var(--fg)">${r.who}</span><span class="mono">${r.meta}</span></span>
          </div>
        </article>`).join("\n        ")}

        <p class="pending-note">
          <span aria-hidden="true">·</span>
          <span><b>Ampliable:</b> aquí aparecen las tres reseñas visibles en la ficha de Google que nos pasasteis. Si queréis mostrar más, se pueden añadir a mano en <code>build/data.mjs</code> o conectar la API de Google Places para traerlas en directo.</span>
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section contrast-zone">
  <div class="shell">
    <div class="grid12" style="align-items:end;row-gap:2rem;margin-bottom:clamp(1.5rem,3vw,2.5rem)">
      <div style="grid-column:1 / span 6">
        <p class="eyebrow">Contexto</p>
        <h2 class="display display--m" style="margin-top:1rem">En el barrio, <em class="italic">y sin trampa</em>.</h2>
      </div>
      <p class="lead" style="grid-column:8 / span 5">Datos públicos de Google de otras gelaterías con las que nos comparan. Los ponemos porque no tenemos nada que esconder.</p>
    </div>
    <ul class="menu-list">
      <li class="menu-row" style="border-top:1px solid var(--line-strong)">
        <span><span class="menu-row__name">La Gelateria Italiana</span><span class="menu-row__desc">Ríos Rosas 54, Chamberí</span></span>
        <span class="menu-row__side" style="color:var(--accent)">4,6 ★ · 753 reseñas</span>
      </li>
      ${NEARBY.map(([n, r, c]) => `<li class="menu-row">
        <span><span class="menu-row__name">${n}</span><span class="menu-row__desc">Heladería en Madrid</span></span>
        <span class="menu-row__side">${r} ★ · ${c} reseñas</span>
      </li>`).join("\n      ")}
    </ul>
  </div>
</section>

<section class="finale">
  <span class="finale__blob" style="top:-22%;left:-6%" data-parallax="13"></span>
  <div class="shell finale__inner">
    <p class="eyebrow">Tu turno</p>
    <h2 class="display display--l" style="max-width:17ch">Si te gusta, <em class="italic">cuéntalo</em>. Si no, cuéntanoslo antes.</h2>
    <div class="actions actions--center">
      <a class="btn btn--solid" href="${SITE.maps}" target="_blank" rel="noopener" data-magnetic="0.25"><span>Escribir una reseña</span>${ARROW}</a>
      <a class="btn btn--ghost" href="tel:${SITE.phoneHref}" data-magnetic="0.18"><span>Hablar con nosotros</span></a>
    </div>
  </div>
</section>
`
};
