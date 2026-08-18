/* Sabores. Confirmados por Google/reseñas: pistacho, chocolate belga,
   café Illy 100% Arábica, tiramisú, turrón, chocolate, yogur.
   El resto de la carta es una propuesta editable por el negocio. */
export const FLAVORS = [
  { n: "Pistacchio di Bronte", f: "crema", c: "#9db35c", note: "Pistacho siciliano tostado en casa. El más pedido de la casa.", tags: ["Sin gluten"], star: true, real: true },
  { n: "Chocolate belga", f: "cioccolato", c: "#4b2a1c", note: "Cobertura belga 70 %, mantecado sin leche añadida.", tags: ["Intenso"], star: true, real: true },
  { n: "Caffè Illy 100% Arabica", f: "crema", c: "#6b4630", note: "Espresso Illy infusionado en frío sobre base de nata.", tags: ["Con cafeína"], star: true, real: true },
  { n: "Tiramisù", f: "especial", c: "#c9a97c", note: "Mascarpone, savoiardi empapado y cacao amargo por encima.", tags: ["Con alcohol"], real: true },
  { n: "Turrón de Jijona", f: "especial", c: "#d8bb84", note: "Turrón blando triturado en la base de crema.", tags: ["Temporada"], real: true },
  { n: "Yogur griego", f: "crema", c: "#eee6d6", note: "Yogur natural colado, ácido y limpio. Sin azúcar añadido.", tags: ["Ligero"], real: true },
  { n: "Chocolate negro", f: "cioccolato", c: "#3a2118", note: "Sorbete de cacao al agua. Más intenso que el de leche.", tags: ["Vegano"], real: true },

  { n: "Fior di latte", f: "crema", c: "#f2ece0", note: "Solo leche, nata y azúcar. El examen de cualquier gelateria." },
  { n: "Crema all'uovo", f: "crema", c: "#f0d489", note: "Yema, limón y vainilla de Madagascar. Receta piamontesa." },
  { n: "Stracciatella", f: "crema", c: "#e8e2d4", note: "Fior di latte con hilos de chocolate templado a mano." },
  { n: "Nocciola Piemonte IGP", f: "crema", c: "#a97e52", note: "Avellana del Piamonte tostada y molida en pasta." },
  { n: "Bacio", f: "cioccolato", c: "#5c3b28", note: "Chocolate y avellana, el beso de Perugia." },
  { n: "Dulce de leche", f: "especial", c: "#c98a4b", note: "Cocido lento hasta el punto de caramelo salado." },
  { n: "Vainilla de Madagascar", f: "crema", c: "#efe2c2", note: "Vaina abierta y raspada, se ven los puntos negros." },
  { n: "Nata", f: "crema", c: "#f4efe4", note: "Nata montada, más aire y menos azúcar." },
  { n: "Cheesecake de frutos rojos", f: "especial", c: "#d68fa0", note: "Queso crema, galleta y variegato de frambuesa." },
  { n: "Ricotta, higo y nuez", f: "especial", c: "#d9c9a8", note: "Ricotta de oveja con higo confitado. Otoño en Sicilia." },
  { n: "Cioccolato bianco", f: "cioccolato", c: "#efe0c4", note: "Chocolate blanco de manteca de cacao, sin empalagar." },
  { n: "Gianduia", f: "cioccolato", c: "#7a4b2c", note: "Chocolate con avellana turinés, denso y sedoso." },
  { n: "Menta y chocolate", f: "cioccolato", c: "#a8c9ac", note: "Menta fresca infusionada, nunca esencia." },
  { n: "Ron con pasas", f: "especial", c: "#d3c0a0", note: "Pasas maceradas siete días en ron añejo.", tags: ["Con alcohol"] },
  { n: "Malaga", f: "especial", c: "#dcc9a4", note: "Vino dulce y pasa moscatel." },
  { n: "Brownie", f: "cioccolato", c: "#4a2c1f", note: "Trozo de brownie horneado el mismo día." },
  { n: "Galleta con crema", f: "especial", c: "#c9c4bb", note: "Base de nata con galleta de cacao triturada." },
  { n: "Tarta de zanahoria", f: "especial", c: "#dda05a", note: "Zanahoria, canela y frosting de queso." },

  { n: "Limón de Sorrento", f: "frutta", c: "#e9e07a", note: "Sorbete de limón al 30 % de fruta. Corta cualquier cosa.", tags: ["Vegano"] },
  { n: "Fresa", f: "frutta", c: "#dd6072", note: "Fresa de temporada macerada con azúcar y limón.", tags: ["Vegano"] },
  { n: "Frambuesa", f: "frutta", c: "#c5405a", note: "Sorbete ácido, sin lácteos, con pepita.", tags: ["Vegano"] },
  { n: "Mango", f: "frutta", c: "#e8a13f", note: "Pulpa de mango maduro, nada más.", tags: ["Vegano"] },
  { n: "Maracuyá", f: "frutta", c: "#e0b24b", note: "Sorbete tenso, muy aromático.", tags: ["Vegano"] },
  { n: "Melón", f: "frutta", c: "#d7e2a0", note: "Melón de temporada, fresco y corto de azúcar.", tags: ["Vegano", "Temporada"] },
  { n: "Sandía", f: "frutta", c: "#e07184", note: "Sorbete de sandía con lima.", tags: ["Vegano", "Temporada"] },
  { n: "Coco", f: "frutta", c: "#f1ece1", note: "Leche de coco y coco rallado tostado.", tags: ["Vegano"] },
  { n: "Piña y albahaca", f: "frutta", c: "#e3d073", note: "Sorbete de piña con hoja de albahaca fresca.", tags: ["Vegano"] },
  { n: "Higo chumbo", f: "frutta", c: "#d0648a", note: "Sorbete de chumbera, dulce y floral.", tags: ["Vegano", "Temporada"] }
];

export const FAMILIES = [
  { k: "all", label: "Todos" },
  { k: "crema", label: "Cremas" },
  { k: "cioccolato", label: "Chocolates" },
  { k: "frutta", label: "Sorbetes y fruta" },
  { k: "especial", label: "Especialidades" }
];

export const INGREDIENTS = [
  {
    idx: "01", name: "Pistacho de Bronte",
    text: "Del volcán, no de un bote. Llega crudo desde el Etna y se tuesta en el obrador la misma semana en que se manteca. Sin colorante: por eso el nuestro es pardo y no verde fosforito.",
    file: "ing-pistacho.jpg",
    desc: "Pistachos crudos de Bronte en un cuenco, o el momento del tostado en el obrador.",
    id: "I-01"
  },
  {
    idx: "02", name: "Chocolate belga",
    text: "Cobertura belga al 70 % fundida y emulsionada al agua. Sin leche añadida el cacao se lee entero: amargo primero, largo después. Es el sabor que más repiten los clientes fijos.",
    file: "ing-chocolate.jpg",
    desc: "Pastillas o callets de cobertura belga, o chocolate fundido cayendo en hilo.",
    id: "I-02"
  },
  {
    idx: "03", name: "Caffè Illy 100 % Arábica",
    text: "El mismo espresso que servimos en taza. Se infusiona en frío durante la noche para que el gelato tenga el aroma del café y no su amargor quemado.",
    file: "ing-cafe.jpg",
    desc: "Taza de espresso Illy sobre el mostrador, o granos de café junto a la tarrina.",
    id: "I-03"
  },
  {
    idx: "04", name: "Leche fresca del día",
    text: "Leche entera pasteurizada y nata, nunca leche en polvo ni grasas hidrogenadas. El aire lo mete la mantecadora, no un aditivo: por eso el gelato pesa en la cuchara.",
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
  { n: "05", t: "Al pozzetto, tapado", d: "Nada de montañas de colores en vitrina. Cubeta tapada a -12 °C: menos oxígeno, menos escarcha y el sabor intacto hasta la última espátula.", file: "proc-pozzetto.jpg", desc: "Fila de pozzetti de acero con las tapas cerradas en el mostrador.", id: "P-05" }
];

/* Reseñas reales publicadas en Google Maps. */
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
    who: "Ana Milo", meta: "Local Guide · 18 reseñas · 1 foto", when: "Hace 2 meses", stars: 2,
    text: "Helado de yogur sin ningún sabor. Contaminación cruzada con otros sabores. Edit: No me refiero a la lista de alérgenos o a informar a los clientes. Mi tarrina estaba manchada con otro sabor que no pedí.",
    reply: "Sobre el sabor, es tu respetable opinión Ana y así la valoramos. Sentimos que no te haya gustado, te invitaría a que lo probaras de nuevo, pues es de los sabores que más nos piden nuestros asiduos clientes.",
    replyWhen: "Respuesta del propietario · hace 2 meses"
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
