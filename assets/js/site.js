/* ============================================================
   LA GELATERIA ITALIANA — motor del sitio
   Loader, navegación, transiciones, scroll y micro-interacción.
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.remove("no-js");

  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var COARSE = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  var hasGSAP = typeof window.gsap !== "undefined";

  if (hasGSAP && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  if (hasGSAP && window.CustomEase) {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("drawer", "0.32,0.72,0,1");
    CustomEase.create("swift", "0.23,1,0.32,1");
  }

  var EASE = hasGSAP && window.CustomEase ? "swift" : "power3.out";
  var EASE_D = hasGSAP && window.CustomEase ? "drawer" : "power4.inOut";

  /* --------------------------------------------------------
     1. Fotografías: relleno automático o hueco señalizado
     -------------------------------------------------------- */
  function initPhotos() {
    document.querySelectorAll(".ph").forEach(function (fig) {
      var img = fig.querySelector(".ph__img");
      if (!img) return;
      var done = function () {
        fig.classList.add("is-loaded");
        var empty = fig.querySelector(".ph__empty");
        if (empty) empty.remove();
      };
      var fail = function () {
        // El hueco queda visible con la descripción de la foto que falta.
        img.remove();
      };
      if (img.complete) {
        img.naturalWidth > 0 ? done() : fail();
      } else {
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", fail, { once: true });
      }
    });
  }

  /* Logotipo: si existe assets/logo/logo.svg se usa; si no, queda el provisional */
  function initLogo() {
    var slots = document.querySelectorAll("[data-logo-slot]");
    if (!slots.length) return;
    var probe = new Image();
    probe.onload = function () {
      slots.forEach(function (s) {
        var real = document.createElement("img");
        real.src = "assets/logo/logo.svg";
        real.alt = "La Gelateria Italiana";
        real.className = s.className;
        real.setAttribute("data-logo-slot", "");
        s.replaceWith(real);
      });
    };
    probe.src = "assets/logo/logo.svg";
  }

  /* --------------------------------------------------------
     2. Utilidades de texto
     -------------------------------------------------------- */
  function splitWords(el) {
    if (el.dataset.split === "done") return Array.from(el.querySelectorAll(".w"));
    var text = el.textContent;
    var frag = document.createDocumentFragment();
    text.split(/(\s+)/).forEach(function (chunk) {
      if (!chunk) return;
      if (/^\s+$/.test(chunk)) {
        frag.appendChild(document.createTextNode(chunk));
      } else {
        var s = document.createElement("span");
        s.className = "w";
        s.textContent = chunk;
        frag.appendChild(s);
      }
    });
    el.textContent = "";
    el.appendChild(frag);
    el.dataset.split = "done";
    return Array.from(el.querySelectorAll(".w"));
  }

  /* --------------------------------------------------------
     3. Scroll suave (Lenis) sincronizado con GSAP
     -------------------------------------------------------- */
  var lenis = null;
  function initSmooth() {
    if (REDUCED || typeof window.Lenis === "undefined" || !hasGSAP) return;
    lenis = new Lenis({
      duration: 1.05,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true,
      touchMultiplier: 1.6
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    window.__lenis = lenis;
  }

  /* --------------------------------------------------------
     4. Cargador "pozzetto"
     -------------------------------------------------------- */
  function runLoader(done) {
    var loader = document.querySelector(".loader");
    if (!loader) { done(); return; }

    var seen = sessionStorage.getItem("lgi-seen") === "1";
    var letters = loader.querySelectorAll(".loader__word span");
    var count = loader.querySelector(".loader__count");
    var bar = loader.querySelector(".loader__bar");
    var lid = loader.querySelector(".pozzetto-mark__lid");
    var scoop = loader.querySelector(".pozzetto-mark__scoop");

    document.body.classList.add("is-loading");

    if (REDUCED || !hasGSAP) {
      loader.hidden = true;
      document.body.classList.remove("is-loading");
      done();
      return;
    }

    var tl = gsap.timeline({
      defaults: { ease: EASE },
      onComplete: function () {
        loader.hidden = true;
        document.body.classList.remove("is-loading");
        sessionStorage.setItem("lgi-seen", "1");
        done();
      }
    });

    var speed = seen ? 0.42 : 1;
    tl.timeScale(1 / speed);

    var counter = { v: 0 };
    tl.set(loader, { autoAlpha: 1 })
      .fromTo(".pozzetto-mark", { scale: 0.82, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.7 })
      .to(letters, { y: 0, duration: 0.9, stagger: 0.035 }, 0.15)
      .to(bar, { scaleX: 1, duration: 1.05, ease: "power2.inOut" }, 0.1)
      .to(counter, {
        v: 100, duration: 1.05, ease: "power2.inOut",
        onUpdate: function () { if (count) count.textContent = String(Math.round(counter.v)).padStart(3, "0"); }
      }, 0.1)
      /* La tapa se levanta y gira: aparece el gelato */
      .to(lid, { yPercent: -34, rotate: -16, scale: 0.94, autoAlpha: 0, duration: 0.8, ease: EASE_D }, "-=0.35")
      .to(scoop, { scale: 1, autoAlpha: 1, duration: 0.7, ease: "back.out(1.6)" }, "<0.1")
      .to(".loader__core", { y: -18, autoAlpha: 0, duration: 0.5 }, "+=0.15")
      .to(loader, { clipPath: "circle(0% at 50% 42%)", duration: 0.95, ease: EASE_D }, "-=0.25");
  }

  /* --------------------------------------------------------
     5. Transición entre páginas
     -------------------------------------------------------- */
  function initTransitions() {
    var curtain = document.querySelector(".curtain");
    if (!curtain) return;

    if (hasGSAP && !REDUCED) {
      gsap.set(curtain, { clipPath: "circle(140% at 50% 50%)" });
      gsap.to(curtain, {
        clipPath: "circle(0% at 50% 50%)",
        duration: 0.85,
        ease: EASE_D,
        delay: 0.05,
        onComplete: function () { curtain.style.visibility = "hidden"; }
      });
    } else {
      curtain.style.visibility = "hidden";
    }

    document.addEventListener("click", function (e) {
      if (window.__lgiPreview) return;
      var a = e.target.closest("a");
      if (!a) return;
      var href = a.getAttribute("href");
      if (!href || a.target === "_blank" || a.hasAttribute("download")) return;
      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (a.origin !== location.origin) return;
      if (a.pathname === location.pathname && a.search === location.search) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      if (REDUCED || !hasGSAP) return;

      e.preventDefault();
      closeNav(true);
      var mark = curtain.querySelector(".curtain__mark");
      curtain.style.visibility = "visible";
      gsap.timeline({ onComplete: function () { location.href = a.href; } })
        .to(curtain, { clipPath: "circle(140% at 50% 50%)", duration: 0.7, ease: EASE_D })
        .to(mark, { autoAlpha: 1, rotate: 180, duration: 0.55, ease: EASE }, "-=0.4");
    });

    window.addEventListener("pageshow", function (ev) {
      if (ev.persisted) {
        curtain.style.visibility = "hidden";
        if (hasGSAP) gsap.set(curtain, { clipPath: "circle(0% at 50% 50%)" });
      }
    });
  }

  /* --------------------------------------------------------
     6. Menú a pantalla completa
     -------------------------------------------------------- */
  var navOpen = false;
  var navTl = null;

  function openNav() {
    var ov = document.querySelector(".nav-overlay");
    var btn = document.querySelector(".menu-btn");
    if (!ov || navOpen) return;
    navOpen = true;
    document.body.classList.add("nav-open");
    ov.classList.add("is-open");
    ov.setAttribute("aria-hidden", "false");
    if (btn) { btn.setAttribute("aria-expanded", "true"); btn.querySelector(".menu-btn__label").textContent = "Cerrar"; }
    if (lenis) lenis.stop();

    var items = ov.querySelectorAll(".nav-item");
    if (!hasGSAP || REDUCED) {
      ov.style.clipPath = "inset(0 0 0 0)";
      items.forEach(function (i) { i.style.transform = "none"; });
    } else {
      navTl = gsap.timeline()
        .fromTo(ov, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.78, ease: EASE_D })
        .to(items, { y: 0, duration: 0.8, stagger: 0.055, ease: EASE }, "-=0.42")
        .fromTo(".nav-overlay__preview, .nav-overlay__foot > *", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.06, ease: EASE }, "-=0.5");
    }
    var first = ov.querySelector(".nav-item");
    if (first) setTimeout(function () { first.focus({ preventScroll: true }); }, 400);
  }

  function closeNav(instant) {
    var ov = document.querySelector(".nav-overlay");
    var btn = document.querySelector(".menu-btn");
    if (!ov || !navOpen) return;
    navOpen = false;
    document.body.classList.remove("nav-open");
    ov.setAttribute("aria-hidden", "true");
    if (btn) { btn.setAttribute("aria-expanded", "false"); btn.querySelector(".menu-btn__label").textContent = "Menú"; }
    if (lenis) lenis.start();

    var finish = function () {
      ov.classList.remove("is-open");
      ov.querySelectorAll(".nav-item").forEach(function (i) { if (hasGSAP) gsap.set(i, { y: "105%" }); });
    };
    if (!hasGSAP || REDUCED || instant) {
      ov.style.clipPath = "inset(0 0 100% 0)";
      finish();
    } else {
      if (navTl) navTl.kill();
      gsap.timeline({ onComplete: finish })
        .to(ov, { clipPath: "inset(0 0 100% 0)", duration: 0.6, ease: EASE_D });
    }
  }

  function initNav() {
    var btn = document.querySelector(".menu-btn");
    var ov = document.querySelector(".nav-overlay");
    if (!btn || !ov) return;

    if (hasGSAP) gsap.set(ov.querySelectorAll(".nav-item"), { y: "105%" });

    btn.addEventListener("click", function () { navOpen ? closeNav() : openNav(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navOpen) { closeNav(); btn.focus(); }
      if (e.key === "Tab" && navOpen) {
        var f = ov.querySelectorAll('a[href], button:not([disabled])');
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); btn.focus(); }
      }
    });

    /* Previsualización que sigue al enlace señalado */
    var slides = ov.querySelectorAll(".nav-preview-slide");
    ov.querySelectorAll(".nav-item").forEach(function (item) {
      var show = function () {
        var k = item.dataset.preview;
        slides.forEach(function (s) { s.classList.toggle("is-active", s.dataset.preview === k); });
      };
      item.addEventListener("mouseenter", show);
      item.addEventListener("focus", show);
    });
  }

  /* --------------------------------------------------------
     7. Cabecera reactiva
     -------------------------------------------------------- */
  function initMasthead() {
    var head = document.querySelector(".masthead");
    if (!head) return;
    var last = 0;
    var onScroll = function () {
      var y = window.scrollY;
      head.classList.toggle("is-stuck", y > 40);
      var hide = y > last && y > 320 && !navOpen;
      head.classList.toggle("is-hidden", hide);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* --------------------------------------------------------
     8. Cursor personalizado
     -------------------------------------------------------- */
  function initCursor() {
    if (COARSE || REDUCED || !hasGSAP) return;
    var dot = document.querySelector(".cursor");
    var ring = document.querySelector(".cursor__ring");
    if (!dot || !ring) return;
    var label = ring.querySelector("span");

    var xD = gsap.quickTo(dot, "x", { duration: 0.14, ease: "power3" });
    var yD = gsap.quickTo(dot, "y", { duration: 0.14, ease: "power3" });
    var xR = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" });
    var yR = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });

    window.addEventListener("mousemove", function (e) {
      xD(e.clientX - 6); yD(e.clientY - 6);
      xR(e.clientX - 20); yR(e.clientY - 20);
      gsap.to([dot, ring], { autoAlpha: 1, duration: 0.25, overwrite: "auto" });
    });
    document.addEventListener("mouseleave", function () {
      gsap.to([dot, ring], { autoAlpha: 0, duration: 0.25 });
    });

    bindCursorTargets();
  }

  function bindCursorTargets() {
    if (COARSE || REDUCED || !hasGSAP) return;
    var dot = document.querySelector(".cursor");
    var ring = document.querySelector(".cursor__ring");
    if (!dot || !ring) return;
    var label = ring.querySelector("span");
    document.querySelectorAll("a, button, .pozzetto, .slice, [data-cursor]").forEach(function (el) {
      if (el.dataset.cursorBound === "1") return;
      el.dataset.cursorBound = "1";
      el.addEventListener("mouseenter", function () {
        var txt = el.getAttribute("data-cursor");
        gsap.to(ring, { scale: txt ? 2.1 : 1.55, borderColor: "rgba(142,34,49,.8)", duration: 0.35, ease: EASE });
        gsap.to(dot, { scale: 0.35, duration: 0.35, ease: EASE });
        if (txt && label) { label.textContent = txt; gsap.to(label, { autoAlpha: 1, duration: 0.25 }); }
      });
      el.addEventListener("mouseleave", function () {
        gsap.to(ring, { scale: 1, borderColor: "rgba(42,32,24,.42)", duration: 0.35, ease: EASE });
        gsap.to(dot, { scale: 1, duration: 0.35, ease: EASE });
        if (label) gsap.to(label, { autoAlpha: 0, duration: 0.2 });
      });
    });
  }

  /* --------------------------------------------------------
     9. Botones magnéticos
     -------------------------------------------------------- */
  function initMagnetic() {
    if (COARSE || REDUCED || !hasGSAP) return;
    document.querySelectorAll("[data-magnetic]").forEach(function (el) {
      if (el.dataset.magBound === "1") return;
      el.dataset.magBound = "1";
      var strength = parseFloat(el.dataset.magnetic) || 0.32;
      var xTo = gsap.quickTo(el, "x", { duration: 0.55, ease: "elastic.out(1, 0.42)" });
      var yTo = gsap.quickTo(el, "y", { duration: 0.55, ease: "elastic.out(1, 0.42)" });
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      });
      el.addEventListener("mouseleave", function () { xTo(0); yTo(0); });
    });
  }

  /* --------------------------------------------------------
     10. Animaciones de scroll
     -------------------------------------------------------- */
  function initScrollFX() {
    if (!hasGSAP || !window.ScrollTrigger) return;

    if (REDUCED) {
      gsap.set(".fx-fade, .fx-rise", { clearProps: "all", opacity: 1, y: 0 });
      document.querySelectorAll(".bar-fill").forEach(function (b) { b.style.width = b.dataset.w || "0%"; });
      document.querySelectorAll(".peak__bar").forEach(function (b) { b.style.height = (b.dataset.v || 0) + "%"; });
      return;
    }

    /* Entradas escalonadas */
    gsap.utils.toArray("[data-reveal]").forEach(function (group) {
      var kids = group.hasAttribute("data-reveal-self") ? [group] : Array.from(group.children);
      if (!kids.length) return;

      /* Rejillas largas: cada fila entra por su cuenta, no toda la lista a la vez */
      if (kids.length > 10) {
        gsap.set(kids, { y: 28, autoAlpha: 0 });
        ScrollTrigger.batch(kids, {
          start: "top 92%",
          once: true,
          onEnter: function (batch) {
            gsap.to(batch, { y: 0, autoAlpha: 1, duration: 0.85, ease: EASE, stagger: 0.06, overwrite: true });
          }
        });
        return;
      }

      gsap.fromTo(kids,
        { y: 34, autoAlpha: 0 },
        {
          y: 0, autoAlpha: 1, duration: 1, ease: EASE, stagger: 0.075,
          scrollTrigger: { trigger: group, start: "top 82%", once: true }
        });
    });

    /* Líneas de titular que suben desde su máscara */
    gsap.utils.toArray("[data-lines]").forEach(function (el) {
      var rows = el.querySelectorAll(".row > *");
      if (!rows.length) return;
      gsap.fromTo(rows, { yPercent: 108 }, {
        yPercent: 0, duration: 1.15, ease: EASE, stagger: 0.08,
        scrollTrigger: { trigger: el, start: "top 88%", once: true }
      });
    });

    /* Parallax: la imagen se expande suavemente al entrar en pantalla */
    gsap.utils.toArray("[data-expand]").forEach(function (frame) {
      var inner = frame.querySelector(".ph") || frame.firstElementChild;
      if (!inner) return;
      var amount = parseFloat(frame.dataset.expand) || 12;
      gsap.timeline({
        scrollTrigger: { trigger: frame, start: "top 92%", end: "top 22%", scrub: 1 }
      })
        .fromTo(frame, { clipPath: "inset(" + amount + "% " + amount + "% " + amount + "% " + amount + "%)" },
          { clipPath: "inset(0% 0% 0% 0%)", ease: "none" }, 0)
        .fromTo(inner, { scale: 1.28 }, { scale: 1, ease: "none" }, 0);
    });

    /* Deriva de fondo */
    gsap.utils.toArray("[data-parallax]").forEach(function (el) {
      var d = parseFloat(el.dataset.parallax) || 12;
      gsap.fromTo(el, { yPercent: -d / 2 }, {
        yPercent: d / 2, ease: "none",
        scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true }
      });
    });

    /* Hero: la escarcha se despeja y el titular se aleja */
    var hero = document.querySelector(".hero");
    if (hero) {
      gsap.timeline({ scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.6 } })
        .to(".hero__frost", { autoAlpha: 0, scale: 1.25, ease: "none" }, 0)
        .to(".hero__inner", { yPercent: -14, autoAlpha: 0.15, ease: "none" }, 0)
        .to(".hero__bench", { yPercent: 22, ease: "none" }, 0);
    }

    /* Texto que se ilumina palabra a palabra */
    gsap.utils.toArray(".scrub-text").forEach(function (el) {
      var words = splitWords(el);
      gsap.to(words, {
        opacity: 1, ease: "none", stagger: 1,
        scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 48%", scrub: 0.5 }
      });
    });

    /* Sección anclada del proceso */
    var pin = document.querySelector("[data-pin-aside]");
    if (pin && window.innerWidth > 900) {
      ScrollTrigger.create({
        trigger: pin.closest(".pinwrap"),
        start: "top 18%",
        end: "bottom 88%",
        pin: pin,
        pinSpacing: false
      });
    }
    gsap.utils.toArray(".pinwrap__steps .step").forEach(function (step, i) {
      ScrollTrigger.create({
        trigger: step,
        start: "top 62%",
        end: "bottom 42%",
        onToggle: function (self) {
          var rail = document.querySelectorAll(".progress-rail li");
          if (rail[i]) rail[i].classList.toggle("is-on", self.isActive);
        }
      });
    });

    /* Contadores */
    gsap.utils.toArray("[data-count]").forEach(function (el) {
      var target = parseFloat(el.dataset.count);
      var dec = (el.dataset.count.split(".")[1] || "").length;
      var obj = { v: 0 };
      gsap.to(obj, {
        v: target, duration: 1.8, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onUpdate: function () {
          el.textContent = obj.v.toFixed(dec).replace(".", ",");
        }
      });
    });

    /* Barras de valoración */
    gsap.utils.toArray(".bar-fill").forEach(function (b) {
      gsap.to(b, {
        width: b.dataset.w || "0%", duration: 1.3, ease: EASE,
        scrollTrigger: { trigger: b.closest(".bars") || b, start: "top 84%", once: true }
      });
    });

    /* Horas punta */
    gsap.utils.toArray(".peak__bar").forEach(function (b, i) {
      gsap.to(b, {
        height: (b.dataset.v || 0) + "%", duration: 0.9, ease: EASE, delay: i * 0.03,
        scrollTrigger: { trigger: b.closest(".peak"), start: "top 86%", once: true }
      });
    });

    /* Marquesinas */
    gsap.utils.toArray(".marquee").forEach(function (m) {
      var track = m.querySelector(".marquee__track");
      if (!track) return;
      var clone = track.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      m.appendChild(clone);
      var dir = m.dataset.dir === "rtl" ? 1 : -1;
      var speed = parseFloat(m.dataset.speed) || 26;
      var tween = gsap.to([track, clone], {
        xPercent: dir * -100, repeat: -1, duration: speed, ease: "none"
      });
      if (dir === 1) gsap.set([track, clone], { xPercent: -100 });
      /* El scroll acelera y cambia el sentido */
      ScrollTrigger.create({
        trigger: m,
        start: "top bottom",
        end: "bottom top",
        onUpdate: function (self) {
          tween.timeScale(1 + Math.min(Math.abs(self.getVelocity()) / 900, 3));
        }
      });
    });

    /* Tarjetas apiladas: la de abajo empuja a la de arriba */
    gsap.utils.toArray(".stackcard").forEach(function (card, i, arr) {
      if (i === arr.length - 1) return;
      gsap.to(card, {
        scale: 0.94, autoAlpha: 0.55, ease: "none",
        scrollTrigger: { trigger: arr[i + 1], start: "top 90%", end: "top 30%", scrub: true }
      });
    });

    ScrollTrigger.refresh();
  }

  /* --------------------------------------------------------
     11. Acordeón horizontal
     -------------------------------------------------------- */
  function initSlices() {
    document.querySelectorAll(".slices").forEach(function (group) {
      var items = Array.from(group.querySelectorAll(".slice"));
      if (!items.length) return;
      var activate = function (el) {
        items.forEach(function (s) {
          var on = s === el;
          s.classList.toggle("is-active", on);
          s.setAttribute("aria-expanded", on ? "true" : "false");
        });
      };
      items.forEach(function (s) {
        s.addEventListener("mouseenter", function () { activate(s); });
        s.addEventListener("focus", function () { activate(s); });
        s.addEventListener("click", function () { activate(s); });
      });
      activate(items[0]);
    });
  }

  /* --------------------------------------------------------
     12. Filtros del catálogo de sabores
     -------------------------------------------------------- */
  function initFilters() {
    var bar = document.querySelector("[data-filters]");
    var grid = document.querySelector("[data-filter-target]");
    if (!bar || !grid) return;
    var live = document.querySelector("[data-filter-live]");
    var cards = Array.from(grid.children);

    bar.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      var key = chip.dataset.filter;
      bar.querySelectorAll(".chip").forEach(function (c) {
        c.setAttribute("aria-pressed", c === chip ? "true" : "false");
      });
      var shown = 0;
      cards.forEach(function (card) {
        var tags = (card.dataset.cat || "").split(" ");
        var on = key === "all" || tags.indexOf(key) > -1;
        card.hidden = !on;
        if (on) shown++;
      });
      if (live) live.textContent = shown + (shown === 1 ? " sabor" : " sabores");
      if (hasGSAP && !REDUCED) {
        gsap.fromTo(cards.filter(function (c) { return !c.hidden; }),
          { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.025, ease: EASE, overwrite: true });
      }
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    });
  }

  /* --------------------------------------------------------
     11b. Panel de pedido online (Uber Eats / Glovo)
     -------------------------------------------------------- */
  var orderLastFocus = null;

  function openOrder(trigger) {
    var panel = document.getElementById("order-panel");
    if (!panel || !panel.hidden) return;
    orderLastFocus = trigger || document.activeElement;
    panel.hidden = false;
    document.body.classList.add("order-open");
    if (lenis) lenis.stop();

    var card = panel.querySelector(".order-panel__card");
    var scrim = panel.querySelector(".order-panel__scrim");
    if (hasGSAP && !REDUCED) {
      gsap.timeline()
        .fromTo(scrim, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.32, ease: "power2.out" })
        .fromTo(card, { autoAlpha: 0, y: 22, scale: 0.97 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.52, ease: EASE }, "-=0.2")
        .fromTo(panel.querySelectorAll(".order-tab:not([hidden]) .order-row"),
          { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.42, stagger: 0.07, ease: EASE }, "-=0.3");
    } else {
      gsap && gsap.set([card, scrim], { autoAlpha: 1 });
      card.style.opacity = "1";
      scrim.style.opacity = "1";
    }

    var first = panel.querySelector(".order-mode");
    if (first) setTimeout(function () { first.focus({ preventScroll: true }); }, 60);
  }

  function closeOrder() {
    var panel = document.getElementById("order-panel");
    if (!panel || panel.hidden) return;
    var done = function () {
      panel.hidden = true;
      document.body.classList.remove("order-open");
      if (lenis) lenis.start();
      if (orderLastFocus && orderLastFocus.isConnected) orderLastFocus.focus({ preventScroll: true });
    };
    if (hasGSAP && !REDUCED) {
      gsap.timeline({ onComplete: done })
        .to(panel.querySelector(".order-panel__card"), { autoAlpha: 0, y: 14, scale: 0.98, duration: 0.3, ease: "power2.in" })
        .to(panel.querySelector(".order-panel__scrim"), { autoAlpha: 0, duration: 0.26 }, "-=0.2");
    } else {
      done();
    }
  }

  function initOrder() {
    var panel = document.getElementById("order-panel");
    if (!panel) return;

    document.addEventListener("click", function (e) {
      var open = e.target.closest("[data-order-open]");
      if (open) { e.preventDefault(); closeNav(true); openOrder(open); return; }
      if (e.target.closest("[data-order-close]")) { e.preventDefault(); closeOrder(); }
    });

    /* Recogida / entrega */
    var modes = panel.querySelector(".order-modes");
    var tabs = Array.from(panel.querySelectorAll(".order-mode"));
    var setMode = function (mode, focus) {
      modes.dataset.active = mode;
      tabs.forEach(function (t) {
        var on = t.dataset.orderMode === mode;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        if (on && focus) t.focus();
      });
      var shown = null;
      panel.querySelectorAll(".order-tab").forEach(function (p) {
        var on = p.id === "panel-" + mode;
        p.hidden = !on;
        if (on) shown = p;
      });
      if (shown && hasGSAP && !REDUCED) {
        gsap.fromTo(shown.querySelectorAll(".order-row"),
          { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.06, ease: EASE, overwrite: true });
      }
    };
    modes.dataset.active = "pickup";
    tabs.forEach(function (t) {
      t.addEventListener("click", function () { setMode(t.dataset.orderMode); });
    });
    modes.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      var i = tabs.findIndex(function (t) { return t.getAttribute("aria-selected") === "true"; });
      var next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
      setMode(next.dataset.orderMode, true);
    });

    /* Teclado: escape y trampa de foco */
    document.addEventListener("keydown", function (e) {
      if (panel.hidden) return;
      if (e.key === "Escape") { e.preventDefault(); closeOrder(); return; }
      if (e.key !== "Tab") return;
      var f = Array.from(panel.querySelectorAll('a[href], button:not([disabled]):not([tabindex="-1"])'));
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  /* --------------------------------------------------------
     12b. Formulario de encargos (sin servidor todavía)
     Compone el resumen, lo copia al portapapeles y ofrece
     el teléfono, que es el canal que sí funciona hoy.
     -------------------------------------------------------- */
  function initEncargo() {
    var form = document.querySelector("[data-encargo]");
    if (!form) return;
    var status = form.querySelector("[data-encargo-status]");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var d = new FormData(form);
      var lines = [
        "Solicitud de encargo — La Gelateria Italiana",
        "Nombre: " + (d.get("nombre") || "—"),
        "Teléfono: " + (d.get("telefono") || "—"),
        "Tipo: " + (d.get("tipo") || "—"),
        "Fecha: " + (d.get("fecha") || "—"),
        "Detalle: " + (d.get("detalle") || "—")
      ].join("\n");

      var say = function (msg) {
        if (!status) return;
        status.hidden = false;
        status.textContent = msg;
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(lines).then(
          function () { say("Resumen copiado. Pégalo en un mensaje o llámanos al 680 51 15 61 y te lo cerramos al momento."); },
          function () { say("No hemos podido copiarlo. Llámanos al 680 51 15 61 y te lo cerramos al momento."); }
        );
      } else {
        say("Llámanos al 680 51 15 61 con estos datos y te lo cerramos al momento.");
      }
    });
  }

  /* --------------------------------------------------------
     13. Estado abierto / cerrado
     Dato verificado: cierre a las 23:00 (Google, Madrid).
     La hora de apertura está pendiente de confirmar por el negocio.
     -------------------------------------------------------- */
  function initOpenState() {
    var nodes = document.querySelectorAll("[data-open-state]");
    if (!nodes.length) return;
    var OPEN_H = 12, CLOSE_H = 23;
    var madrid = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Madrid" }));
    var h = madrid.getHours() + madrid.getMinutes() / 60;
    var open = h >= OPEN_H && h < CLOSE_H;
    nodes.forEach(function (n) {
      n.classList.toggle("is-closed", !open);
      var t = n.querySelector("[data-open-text]");
      if (t) t.textContent = open ? "Abierto ahora · cierra a las 23:00" : "Cerrado ahora · abre a las 12:00";
    });
  }

  /* --------------------------------------------------------
     14. Año en curso
     -------------------------------------------------------- */
  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (n) {
      n.textContent = new Date().getFullYear();
    });
  }

  /* --------------------------------------------------------
     Arranque
     -------------------------------------------------------- */
  function boot() {
    initPhotos();
    initLogo();
    initSmooth();
    initNav();
    initMasthead();
    initSlices();
    initFilters();
    initOrder();
    initOpenState();
    initEncargo();
    initYear();
    initTransitions();
    initCursor();
    initMagnetic();

    runLoader(function () {
      initScrollFX();
      document.body.classList.add("is-ready");
    });
  }

  window.__lgiCloseNav = function () { closeNav(true); };

  /* Re-inicializa el contenido tras un cambio de página en la vista previa */
  window.__lgiRefresh = function () {
    if (window.ScrollTrigger) {
      ScrollTrigger.getAll().forEach(function (t) { t.kill(true); });
    }
    initPhotos();
    initSlices();
    initFilters();
    initOpenState();
    initEncargo();
    initYear();
    initMagnetic();
    bindCursorTargets();
    initScrollFX();
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.addEventListener("load", function () {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
})();
