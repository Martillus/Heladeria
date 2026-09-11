import { SITE, LOCALES, ARROW } from "../chrome.mjs";

export default {
  page: "404.html",
  title: "Esa página no existe · La Gelateria Italiana",
  desc: "La página que buscas no está aquí. Vuelve al inicio o mira la carta de La Gelateria Italiana, con dos locales en Madrid.",
  hidden: true,
  body: `
<section class="hero hero--404">
  <div class="hero__wash" aria-hidden="true"></div>
  <div class="hero__inner" style="grid-template-columns:1fr;align-items:center;justify-items:center;text-align:center;padding-block:clamp(8rem,20vh,12rem)">
    <div style="display:grid;justify-items:center;gap:clamp(1.4rem,3vw,2.2rem);max-width:min(100%,44rem)">
      <span class="pozzetto" style="--flavor:#bdd07c;width:clamp(110px,14vw,170px)" aria-hidden="true">
        <span class="pozzetto__well">
          <span class="pozzetto__frost"></span>
          <span class="pozzetto__lid"></span>
        </span>
      </span>
      <p class="eyebrow">Error 404</p>
      <h1 class="display display--l" data-lines>
        <span class="row"><span>Esta cubeta</span></span>
        <span class="row"><span>está <em class="italic">vacía</em>.</span></span>
      </h1>
      <p class="lead" style="max-width:38ch">La página que buscabas no existe o la hemos movido. Las que sí están llenas son estas.</p>
      <div class="actions actions--center">
        <a class="btn btn--solid" href="index.html" data-magnetic="0.25"><span>Volver al inicio</span>${ARROW}</a>
        <a class="btn btn--ghost" href="sabores.html" data-magnetic="0.18"><span>Ver los sabores</span></a>
      </div>
      <p class="mono" style="color:var(--fg-faint);margin-top:.6rem">${LOCALES.map(l => l.short).join(" · ")}</p>
    </div>
  </div>
</section>
`
};
