/* Sabores tomados del panel de la tienda ("Gelato Artigianale by LA GELATERIA")
   y de las etiquetas de la vitrina. El panel avisa de que cada día se elaboran
   sabores nuevos, así que la carta fija convive con los rotativos. */
export const FLAVORS = [
  { n: "Pistacchio Siciliano", f: "crema", c: "#a8b573", note: "Pistacho siciliano con Denominación de Origen. El más pedido de la casa.", tags: ["D.O.P."], star: true },
  { n: "Chocolate Belga 70 %", f: "cioccolato", c: "#3e2417", note: "Cobertura belga al 70 %. Amargo primero, largo después.", tags: ["70 %"], star: true },
  { n: "Café 100 % Arábica", f: "crema", c: "#6b4a33", note: "El mismo café que servimos en taza, sobre base de leche fresca.", tags: ["Con cafeína"], star: true },
  { n: "Avellana de Piemonte", f: "crema", c: "#b08554", note: "Avellana del Piamonte con Denominación de Origen, tostada y molida en pasta.", tags: ["D.O.P."], star: true },
  { n: "Fior di Latte", f: "crema", c: "#f6f0e2", note: "Solo leche fresca de granja, nata y azúcar. El examen de cualquier gelateria.", star: true },
  { n: "Tiramisù", f: "especial", c: "#c9a87c", note: "Mascarpone, bizcocho empapado en café y cacao amargo por encima.", star: true },
  { n: "Stracciatella", f: "crema", c: "#efe7d6", note: "Fior di latte con hilos de chocolate templado a mano.", star: true },
  { n: "Limone", f: "frutta", c: "#ede07e", note: "Limón de temporada. Corta cualquier cosa que lleves antes.", tags: ["Fruta de temporada"], star: true },

  { n: "Chocolate", f: "cioccolato", c: "#53331f", note: "Cacao puro, denso y sin adornos." },
  { n: "Menta y Galleta", f: "cioccolato", c: "#bfd3c0", note: "Menta infusionada con galleta de cacao triturada." },
  { n: "Nocciotella", f: "crema", c: "#7a5238", note: "Avellana y cacao, la merienda de siempre hecha gelato." },
  { n: "Vainilla", f: "crema", c: "#f0e3c2", note: "Vaina abierta y raspada: se ven los puntos negros." },
  { n: "Leche merengada", f: "crema", c: "#f3eada", note: "Leche, canela y limón. La receta de aquí, no de Italia." },
  { n: "Yogurt", f: "crema", c: "#f4efe6", note: "Yogur natural, ácido y limpio." },
  { n: "Cheesecake", f: "especial", c: "#e8c98f", note: "Queso crema y base de galleta." },
  { n: "Dulce de leche", f: "especial", c: "#c98b4b", note: "Cocido lento hasta el punto de caramelo." },
  { n: "Panettone", f: "especial", c: "#e7cfa0", note: "Sabor de temporada, elaborado en tienda.", tags: ["Rotativo"] },

  { n: "Cocco", f: "frutta", c: "#f4f0e6", note: "Coco rallado sobre base de leche fresca." },
  { n: "Mango", f: "frutta", c: "#e7a93f", note: "Pulpa de mango maduro, nada más.", tags: ["Fruta de temporada"] },
  { n: "Maracujá", f: "frutta", c: "#e3b84a", note: "Muy aromático y tenso. Entró hace poco y se ha quedado.", tags: ["Rotativo"] },
  { n: "Frambuesa", f: "frutta", c: "#c2445c", note: "Ácida, con pepita, de fruta de temporada.", tags: ["Fruta de temporada"] },
  { n: "Ananas", f: "frutta", c: "#e8d272", note: "Piña fresca cortada en tienda.", tags: ["Fruta de temporada"] }
];

export const FAMILIES = [
  { k: "all", label: "Todos" },
  { k: "crema", label: "Cremas" },
  { k: "cioccolato", label: "Chocolates" },
  { k: "frutta", label: "Frutas" },
  { k: "especial", label: "Especialidades" }
];

export const INGREDIENTS = [
  {
    idx: "01", name: "Pistacho siciliano D.O.P.",
    text: "Con Denominación de Origen, del sur de Italia. Sin colorante: por eso el nuestro es pardo y no verde fosforito. Es el sabor que más nos piden.",
    file: "ing-pistacho.jpg",
    desc: "Pistachos crudos en un cuenco, o el momento del tostado en el obrador.",
    id: "I-01"
  },
  {
    idx: "02", name: "Chocolate belga 70 %",
    text: "Cobertura belga al 70 %, fundida y emulsionada en el obrador. El cacao se lee entero: amargo primero, largo después.",
    file: "ing-chocolate.jpg",
    desc: "Pastillas o callets de cobertura belga, o chocolate fundido cayendo en hilo.",
    id: "I-02"
  },
  {
    idx: "03", name: "Café 100 % Arábica",
    text: "El mismo café que servimos en taza. Va al gelato para que tenga el aroma del café y no su amargor quemado.",
    file: "ing-cafe.jpg",
    desc: "Taza de café sobre el mostrador, o granos junto a la tarrina.",
    id: "I-03"
  },
  {
    idx: "04", name: "Leche fresca de granja",
    text: "Leche fresca de granja y fruta de temporada, nunca leche en polvo. El aire lo mete la mantecadora, no un aditivo: por eso el gelato pesa en la cuchara.",
    file: "ing-leche.jpg",
    desc: "Leche vertiéndose en el pasteurizador, o el detalle de la mantecadora girando.",
    id: "I-04"
  }
];

export const STEPS = [
  { n: "01", t: "Pesar en frío", d: "Cada base se calcula por gramos: grasa, azúcares y sólidos. Un punto de más y el gelato cristaliza; uno de menos y se derrite en la mano.", file: "proc-pesar.jpg", desc: "Balanza con ingredientes secos, o el cuaderno de recetas del obrador.", id: "P-01" },
  { n: "02", t: "Pasteurizar a 85 °C", d: "La mezcla sube hasta 85 °C y baja de golpe a 4 °C. Es lo que hace que un gelato artesanal sea seguro sin necesitar conservantes.", file: "proc-pasteurizar.jpg", desc: "Pasteurizadora de acero en marcha, con el termómetro visible.", id: "P-02" },
  { n: "03", t: "Madurar toda la noche", d: "Doce horas de reposo a 4 °C. Las proteínas se hidratan y las grasas cristalizan: sin esta espera el sabor se queda plano.", file: "proc-madurar.jpg", desc: "Cubetas tapadas madurando en la cámara frigorífica.", id: "P-03" },
  { n: "04", t: "Mantecar por la mañana", d: "A las siete de la mañana la mantecadora bate y congela a la vez. Sale a -8 °C, denso y con poco aire. Solo dura un día bueno.", file: "proc-mantecar.jpg", desc: "Gelato saliendo de la mantecadora hacia la cubeta de acero.", id: "P-04" },
  { n: "05", t: "A la cubeta", d: "Cada sabor a su cubeta de acero, con su espátula. Se repone varias veces al día: lo que ves a media tarde no es lo que había a mediodía.", file: "proc-pozzetto.jpg", desc: "Fila de cubetas de acero en el mostrador, con las espátulas puestas.", id: "P-05" }
];

/* Reseñas publicadas en Google Maps. Las dos primeras van con nombre y
   fecha tal y como están publicadas. La tercera es uno de los extractos
   que Google destaca en la ficha: no consta autor, así que va sin firma
   y sin estrellas en vez de atribuirla a alguien. */
export const REVIEWS = [
  {
    who: "Pepe Jimenez", meta: "Local Guide · 18 reseñas · 11 fotos", when: "Hace 5 meses", stars: 5,
    text: "Somos clientes fijos por la calidad y consistencia del producto. El personal es muy atento y ayer nos atendieron 2 chicos nuevos maravillosos, Natalia y Julio. Volveremos siempre, sin duda, el mejor gelato de Madrid!"
  },
  {
    who: "Claudia Hernandez", meta: "Local Guide · 54 reseñas · 98 fotos", when: "Hace 2 meses", stars: 5,
    text: "Siempre hay que hacer un poco de fila pero merece la pena. Me encanta esta heladería, la recomiendo."
  },
  {
    anon: true, meta: "Extracto destacado por Google", when: "", stars: 0,
    text: "Los helados son deliciosos, no hemos probado uno que no sea un acierto."
  }
];

export const HIGHLIGHTS = [
  "Los helados son deliciosos, no hemos probado uno que no sea un acierto.",
  "Probamos café, tiramisú, chocolate belga, chocolate y turrón.",
  "Buen servicio y raciones generosas."
];

export const MENTIONS = [
  { k: "sabores", n: 98 }, { k: "pistacho", n: 57 }, { k: "chocolate belga", n: 19 }, { k: "ricos", n: 19 }
];
