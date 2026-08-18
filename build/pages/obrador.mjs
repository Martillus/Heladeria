import { SITE, photo, ARROW } from "../chrome.mjs";
import { STEPS, INGREDIENTS } from "../data.mjs";

export default {
  page: "obrador.html",
  title: "El obrador · La Gelateria Italiana",
  desc: "Cómo se hace el gelato en Ríos Rosas: pesado en gramos, pasteurizado a 85 °C, doce horas de maduración y mantecado a las siete de la mañana.",
  body: `
<header class="pagehead">
  <span class="pagehead__glow" aria-hidden="true"></span>
  <div class="shell">
    <nav class="crumbs mono" aria-label="Migas de pan"><a href="index.html">Inicio</a><span aria-hidden="true">/</span><span>Obrador</span></nav>
    <div class="pagehead__grid">
      <div class="pagehead__title" data-lines>
        <h1 class="display display--xl"><span class="row"><span>Doce horas</span></span><span class="row"><span>de <em class="italic">espera</em></span></span><span class="row"><span>por cubeta.</span></span></h1>
      </div>
      <div class="stack">
        <p class="lead">Un gelato industrial se hace en veinte minutos con base en polvo. El nuestro empieza la tarde anterior y termina a las siete de la mañana siguiente.</p>
        <p class="mono" style="color:var(--pistacchio)">Obrador propio en Ríos Rosas 54</p>
      </div>
    </div>
  </div>
</header>

<!-- ============ PROCESO ANCLADO ============ -->
<section class="section pinwrap" style="padding-top:clamp(2rem,5vw,4rem)">
  <div class="shell">
    <div class="pinwrap__grid">
      <div class="pinwrap__aside" data-pin-aside>
        <p class="eyebrow" style="margin-bottom:1.2rem">La mantecazione</p>
        <h2 class="display display--m">Cinco pasos<br><em class="italic">y una noche.</em></h2>
        <ol class="progress-rail">
          ${STEPS.map(s => `<li>${s.n} · ${s.t}</li>`).join("\n          ")}
        </ol>
        <p class="lead" style="margin-top:2rem;max-width:32ch">Nada de esto se ve desde la calle. Es exactamente por eso por lo que lo contamos aquí.</p>
      </div>

      <div class="pinwrap__steps">
        ${STEPS.map(s => `<article class="step">
          <div class="step__frame" data-expand="14">
            ${photo({ id: s.id, file: s.file, alt: s.t, ar: "4 / 3", desc: s.desc, spec: "4:3 apaisada · mín. 1800 px" })}
          </div>
          <div class="step__head">
            <span class="step__n">${s.n}</span>
            <h3 class="step__t">${s.t}</h3>
          </div>
          <p class="lead measure" style="font-size:1rem">${s.d}</p>
        </article>`).join("\n        ")}
      </div>
    </div>
  </div>
</section>

<!-- ============ MARQUESINA ============ -->
<section style="padding-block:clamp(2rem,4vw,3.5rem);border-block:1px solid var(--line);overflow:hidden">
  <div class="marquee" data-speed="30" data-dir="rtl" aria-hidden="true">
    <div class="marquee__track">
      <span class="marquee__item">85 °C<span class="marquee__dot"></span>12 h a 4 °C<span class="marquee__dot"></span>−8 °C al salir<span class="marquee__dot"></span>−12 °C en pozzetto<span class="marquee__dot"></span>0 grasas hidrogenadas<span class="marquee__dot"></span></span>
    </div>
  </div>
</section>

<!-- ============ INGREDIENTES: BENTO ============ -->
<section class="section">
  <div class="shell">
    <header style="max-width:50ch;margin-bottom:clamp(2rem,4vw,3.5rem)" data-lines>
      <p class="eyebrow" style="margin-bottom:1.2rem">Materia prima</p>
      <h2 class="display display--m"><span class="row"><span>Cuatro cosas</span></span><span class="row"><span>que no <em class="italic">negociamos</em>.</span></span></h2>
    </header>

    <div class="bento" data-reveal>
      <div class="b-a" data-expand="10">
        ${photo({
          id: "O-01", file: "obrador-vista.jpg",
          alt: "Vista general del obrador",
          ar: "16 / 10",
          desc: "Plano general del obrador o de la tienda con el equipo trabajando detrás del mostrador.",
          spec: "16:10 apaisada · mín. 2400 px"
        })}
      </div>
      <div class="b-b"><div class="bento-note"><p class="bento-note__k">85 °C</p><p style="color:var(--fg-mute);font-size:.86rem">Pasteurización sin conservantes añadidos.</p></div></div>
      <div class="b-c"><div class="bento-note"><p class="bento-note__k">4 °C</p><p style="color:var(--fg-mute);font-size:.86rem">Doce horas de maduración antes de mantecar.</p></div></div>
      <div class="b-d">
        ${photo({
          id: "O-02", file: "obrador-detalle.jpg",
          alt: "Detalle de la elaboración",
          ar: "3 / 4",
          desc: "Detalle vertical: fruta cortada, frutos secos molidos o la cubeta llenándose de gelato.",
          spec: "3:4 vertical · mín. 1500 px"
        })}
      </div>
      <div class="b-e"><div class="bento-note" style="align-content:center">
        <p class="display display--s">“No hemos probado uno que no sea un acierto.”</p>
        <p class="mono" style="color:var(--fg-faint)">Reseña publicada en Google</p>
      </div></div>
      <div class="b-f"><div class="bento-note"><p class="bento-note__k">07:00</p><p style="color:var(--fg-mute);font-size:.86rem">Hora a la que sale la primera cubeta.</p></div></div>
      <div class="b-g"><div class="bento-note"><p class="bento-note__k">24 h</p><p style="color:var(--fg-mute);font-size:.86rem">Lo que dura un gelato en su punto exacto.</p></div></div>
    </div>
  </div>
</section>

<!-- ============ INGREDIENTES: TARJETAS APILADAS ============ -->
<section class="section panna-zone" style="padding-bottom:clamp(3rem,6vw,5rem)">
  <div class="shell">
    <header style="max-width:44ch;margin-bottom:clamp(2rem,4vw,3rem)">
      <p class="eyebrow">Origen</p>
      <h2 class="display display--m" style="margin-top:1rem">De dónde viene <em class="italic">cada cosa</em>.</h2>
    </header>
    <div class="stackcards">
      ${INGREDIENTS.map((i, k) => `<article class="stackcard" style="top:calc(clamp(5rem,12vh,8rem) + ${k * 14}px)">
        <div class="stackcard__grid">
          <div class="stackcard__body">
            <p class="mono" style="color:var(--amarena)">${i.idx} / 04</p>
            <h3 class="display display--s">${i.name}</h3>
            <p class="lead" style="font-size:1rem">${i.text}</p>
          </div>
          <div class="stackcard__media">
            ${photo({ id: i.id + "b", file: i.file.replace(".jpg", "-2.jpg"), alt: i.name, ar: "1 / 1", desc: i.desc, spec: "cuadrada o vertical · mín. 1400 px", compact: true })}
          </div>
        </div>
      </article>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="grid12" style="align-items:start;row-gap:2rem">
      <div style="grid-column:1 / span 5">
        <p class="eyebrow">El equipo</p>
        <h2 class="display display--m" style="margin-top:1rem">Detrás del mostrador <em class="italic">hay alguien</em>.</h2>
      </div>
      <div style="grid-column:7 / span 6" class="stack">
        <p class="lead">Las reseñas que más nos gustan no hablan del helado, hablan de quien lo sirve: quien te deja probar tres sabores antes de decidir y quien te recomienda la combinación que no habrías pedido.</p>
        <blockquote class="quote__text" style="border-left:2px solid var(--pistacchio);padding-left:1.2rem">“El personal es muy atento y ayer nos atendieron 2 chicos nuevos maravillosos. Volveremos siempre, sin duda, el mejor gelato de Madrid.”</blockquote>
        <p class="mono" style="color:var(--fg-faint)">Pepe Jimenez · Local Guide · Google</p>
        <div class="actions"><a class="btn btn--ghost" href="resenas.html" data-magnetic="0.2"><span>Todas las reseñas</span>${ARROW}</a></div>
      </div>
    </div>
  </div>
</section>

<section class="finale">
  <span class="finale__blob" style="top:-25%;left:-4%" data-parallax="14"></span>
  <div class="shell finale__inner">
    <p class="eyebrow">Ríos Rosas 54</p>
    <h2 class="display display--l" style="max-width:18ch">Ven a la hora en que se abre la <em class="italic">primera tapa</em>.</h2>
    <div class="actions actions--center">
      <a class="btn btn--solid" href="visitanos.html" data-magnetic="0.25"><span>Cómo llegar</span>${ARROW}</a>
      <a class="btn btn--ghost" href="sabores.html" data-magnetic="0.18"><span>Ver sabores</span></a>
    </div>
  </div>
</section>
`
};
