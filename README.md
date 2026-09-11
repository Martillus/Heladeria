# La Gelateria Italiana — sitio web

Sitio de siete páginas para **La Gelateria Italiana**, gelateria artesanal con dos
locales en Madrid: C. de Ríos Rosas 54 (Chamberí, 4,6 ★ · 753 reseñas en Google) y
Pl. de la República Dominicana 6 (Chamartín).

HTML estático, sin framework ni proceso de servidor. Se sube tal cual a cualquier
hosting: Vercel, Netlify, GitHub Pages, un FTP de toda la vida.

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
| `404.html` | Error 404 | "Esta cubeta está vacía", con vuelta al inicio |

El botón **Pedir** de la cabecera abre un panel con las dos plataformas de reparto
(Uber Eats y Glovo) y un selector de recogida o entrega, igual que hace la ficha de
Google. Los enlaces viven en `ORDER`, dentro de `build/chrome.mjs`; se han guardado
limpios, sin los parámetros de seguimiento que añade Google.

## Dirección de diseño

La paleta está sacada del local: las paredes crema, el suelo de roble, el rótulo de
madera de la pared, el granate del panel de sabores y el acero de las cubetas. Los
sabores se presentan como cubetas con la tapa ladeada que se abre al pasar el ratón, y
el cargador es esa misma tapa levantándose para enseñar el gelato.

- **Color** — crema `#f4eee2`, cacao `#2a2018`, madera `#b98a52`,
  granate `#8e2231`, acero templado `#8b8376`.
- Las secciones de contraste (`.contrast-zone`) invierten los roles a cacao sobre crema,
  y el pie ancla la página en oscuro.
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

## Publicar en Vercel

El repositorio ya trae `vercel.json`. No hay que configurar nada dentro de Vercel:
ni comando de build, ni directorio de salida, ni variables de entorno.

1. Entra en [vercel.com/new](https://vercel.com/new) con la cuenta de GitHub.
2. Importa el repositorio **Martillus/Heladeria**.
3. En *Framework Preset* deja **Other**. No toques Build ni Output.
4. **Importante** — antes de desplegar, en *Settings → Git → Production Branch*
   pon `claude/gelateria-italiana-website-5g6tho`. La rama por defecto del
   repositorio no contiene la web, así que sin este paso Vercel publica un sitio vacío.
   La alternativa es fusionar esa rama en la rama por defecto y dejar la producción ahí.
5. **Deploy**. Tarda menos de un minuto.

Para un dominio propio: *Settings → Domains*, añade `lagelateriaitaliana.es` (o el que
sea) y Vercel dicta los registros DNS que hay que crear en el registrador.

### Lo que hace `vercel.json`

- **URLs limpias**: `/sabores` en vez de `/sabores.html`.
- **Caché**: las fuentes un año, las imágenes una semana, el CSS y el JS siempre revalidados,
  para que un cambio se vea al instante.
- **Cabeceras de seguridad**: `nosniff`, `Referrer-Policy`, `X-Frame-Options` y una
  `Permissions-Policy` que apaga cámara, micrófono y geolocalización.
- `404.html` se sirve como página de error, con la identidad de la marca.

`.vercelignore` deja fuera del despliegue `build/`, `.claude/` y `SKILLS-SETUP.md`.

Si algún día se publica en un hosting sin URLs limpias (FTP, GitHub Pages), se genera con
`LINKS=ext node build/build.mjs` y los enlaces vuelven a llevar `.html`.

## Qué falta por vuestra parte

1. **Las 27 fotografías** — la lista completa, con nombre de archivo y qué tiene que
   salir en cada una, está en [`assets/img/README.md`](assets/img/README.md). Los huecos
   se rellenan solos al dejar el archivo en la carpeta.
2. **El logotipo** — dejadlo en `assets/logo/logo.svg` y sustituye al provisional en
   toda la web. Ver [`assets/logo/README.md`](assets/logo/README.md).
3. **Hora de apertura** — de Google solo consta el cierre (23:00). El horario de apertura
   está puesto como propuesta en `build/pages/visitanos.mjs`.
4. **Datos del local de República Dominicana** — no tenemos teléfono, horario propio ni
   enlaces de Uber Eats y Glovo para ese local. Ahora comparte el teléfono y el horario
   de Ríos Rosas, y el pedido online se sirve solo desde Ríos Rosas. Si son distintos, se
   separan en `LOCALES`, dentro de `build/chrome.mjs`.
5. **Destino del formulario de encargos** — hoy prepara el resumen y lo copia al
   portapapeles. Con un correo o un servicio (Formspree, Netlify Forms) se envía solo.
6. **Descripciones de los sabores** — los 22 nombres están tomados de vuestro panel y
   de las etiquetas de la vitrina, pero la frase que acompaña a cada uno es nuestra.
   Repasadlas en `build/data.mjs`.

## Accesibilidad

Revisado contra las Web Interface Guidelines: contraste AA en todo el texto,
foco visible, navegación por teclado con trampa de foco en el menú, enlace de salto,
áreas táctiles de 44 px, jerarquía de encabezados sin saltos, sin scroll horizontal
en 375 / 768 / 1440, y `prefers-reduced-motion` respetado en toda la web.
