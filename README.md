# La Gelateria Italiana — sitio web

Sitio de siete páginas para **La Gelateria Italiana**, gelateria artesanal en
C. de Ríos Rosas 54, Chamberí, Madrid (4,6 ★ · 753 reseñas en Google).

HTML estático, sin framework ni proceso de servidor. Se sube tal cual a cualquier
hosting: Netlify, Vercel, GitHub Pages, un FTP de toda la vida.

---

## Las páginas

| Archivo | Página | Qué cuenta |
|---|---|---|
| `index.html` | Inicio | El banco de pozzetti, la tesis del producto, sabores destacados, ingredientes, reseñas y visita |
| `sabores.html` | Sabores | Catálogo de 35 sabores con filtros por familia y por veganos |
| `carta.html` | Carta | Conos y tarrinas, copas, caffetteria, granizados, tartas heladas |
| `obrador.html` | Obrador | El proceso en cinco pasos, con sección anclada al scroll, y el origen de la materia prima |
| `eventos.html` | Eventos | Tartas por encargo, celebraciones, catering y formulario de solicitud |
| `resenas.html` | Reseñas | Nota media, distribución, reseñas reales de Google con la respuesta del propietario |
| `visitanos.html` | Visítanos | Dirección, horario, horas punta, transporte y servicios |

El botón **Pedir** de la cabecera abre un panel con las dos plataformas de reparto
(Uber Eats y Glovo) y un selector de recogida o entrega, igual que hace la ficha de
Google. Los enlaces viven en `ORDER`, dentro de `build/chrome.mjs`; se han guardado
limpios, sin los parámetros de seguimiento que añade Google.

## Dirección de diseño

**"Il Pozzetto"** — el frío del armario italiano. En una gelateria de verdad el helado
vive tapado en cubetas de acero a −12 °C, no en montañas de colores. Toda la web parte
de ahí: el fondo es el verde noche del interior del armario, los sabores son pozzetti
con la tapa ladeada que se abre al pasar el ratón, y el cargador es una tapa que se
levanta para enseñar el gelato.

- **Color** — verde notte `#0b1410`, panna `#f3eee2`, pistacchio `#bdd07c`,
  amarena `#9e1b32`, acero `#c3cbcb`.
- **Tipografía** — Bodoni Moda (display, tipografía italiana de Parma),
  Archivo (texto), DM Mono (datos y etiquetas). Autoalojadas en `assets/fonts/`.
- **Movimiento** — GSAP + ScrollTrigger y Lenis, todo autoalojado en `assets/vendor/`.

## Animación

- Cargador propio con la tapa del pozzetto y transición circular a la página.
- Transición entre páginas con máscara circular.
- Parallax con expansión de imagen al hacer scroll (`data-expand`) y deriva de fondo (`data-parallax`).
- Sección anclada en el obrador con indicador de progreso.
- Texto que se ilumina palabra a palabra con el scroll.
- Tarjetas apiladas, acordeón horizontal de ingredientes, marquesinas que aceleran con el scroll.
- Cursor propio, botones magnéticos, revelados escalonados y contadores.

Todo respeta `prefers-reduced-motion`: con movimiento reducido la web se sirve estática
y completa, sin estados invisibles.

## Estructura

```
index.html · sabores.html · …      Páginas generadas (esto es lo que se sube)
assets/
  css/       fonts, base, components, layout
  js/        site.js — motor de carga, navegación, scroll e interacción
  vendor/    gsap, ScrollTrigger, CustomEase, lenis
  fonts/     woff2 autoalojados
  img/       Fotografías. Ver assets/img/README.md
  logo/      Logotipo y favicon. Ver assets/logo/README.md
build/
  build.mjs  Generador
  chrome.mjs Cabecera, menú, pie y componente de hueco de foto
  data.mjs   Sabores, ingredientes, proceso, reseñas
  pages/     Contenido de cada página
preview/
  index.html Versión de un solo archivo, autocontenida, para enseñarla sin servidor
```

Las páginas comparten cabecera, menú y pie, así que **no se editan a mano**: se cambia
el contenido en `build/` y se regenera.

```bash
node build/build.mjs
```

No hay dependencias que instalar: solo Node.

## Qué falta por vuestra parte

1. **Las 26 fotografías** — la lista completa, con nombre de archivo y qué tiene que
   salir en cada una, está en [`assets/img/README.md`](assets/img/README.md). Los huecos
   se rellenan solos al dejar el archivo en la carpeta.
2. **El logotipo** — dejadlo en `assets/logo/logo.svg` y sustituye al provisional en
   toda la web. Ver [`assets/logo/README.md`](assets/logo/README.md).
3. **Hora de apertura** — de Google solo consta el cierre (23:00). El horario de apertura
   está puesto como propuesta en `build/pages/visitanos.mjs`.
4. **Precios** — la carta se ha maquetado sin columna de precio porque no hay ninguno
   público. Cuando la paséis, se añade sin tocar el diseño.
5. **Destino del formulario de encargos** — hoy prepara el resumen y lo copia al
   portapapeles. Con un correo o un servicio (Formspree, Netlify Forms) se envía solo.
6. **Sabores** — están confirmados pistacho, chocolate belga, café Illy, tiramisú,
   turrón, chocolate y yogur. El resto de la lista es una propuesta editable en
   `build/data.mjs`.

## Accesibilidad

Revisado contra las Web Interface Guidelines: contraste AA en todo el texto,
foco visible, navegación por teclado con trampa de foco en el menú, enlace de salto,
áreas táctiles de 44 px, jerarquía de encabezados sin saltos, sin scroll horizontal
en 375 / 768 / 1440, y `prefers-reduced-motion` respetado en toda la web.
