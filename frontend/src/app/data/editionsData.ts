export interface EditionPhoto {
  id: string;
  url: string;
  caption: string;
  tag: string;
}

export interface Edition {
  id: string;
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  city: string;
  status: "Próxima" | "Realizada";
  featuredCover: string;
  shortDescription: string;
  fullStory: string;
  highlights: string[];
  attendeesCount: string;
  exhibitorsCount: string;
  gallery: EditionPhoto[];
}

export const EDITIONS_DATA: Edition[] = [
  {
    id: "ed-42",
    slug: "edicion-42-equinoccio",
    number: 42,
    title: "Edición #42: Luna Llena de Equinoccio",
    subtitle: "Florecer místico y armonización de estaciones",
    date: "24 & 25 de Agosto, 2026",
    time: "11:00 AM – 8:00 PM",
    location: "Casona Cultural Mística (Jardines Principales)",
    city: "Centro Histórico",
    status: "Próxima",
    featuredCover: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=1000&q=80",
    shortDescription:
      "La próxima gran feria pop-up donde celebraremos la llegada del equinoccio con más de 50 artesanos, lecturas de tarot bajo pérgolas y ritual colectivo de fuego.",
    fullStory:
      "La Edición #42 de Mercado de Brujas será un encuentro de consagración estacional. Reuniremos a destacados artesanos independientes, alquimistas botánicos e ilustradores esotéricos en los amplios jardines de la Casona Cultural Mística. Contaremos con zonas de meditación sonora con cuencos de cuarzo, estación de tinturas de plantas sagradas y una ceremonia colectiva al atardecer para intencionar los proyectos de toda la comunidad.",
    highlights: [
      "50+ Expositores Seleccionados",
      "Ritual Colectivo al Atardecer",
      "Talleres de Sahumerios Ancestrales",
      "Zona Gastronómica Botánica",
    ],
    attendeesCount: "Esperados ~2,500",
    exhibitorsCount: "55 Marcas",
    gallery: [
      {
        id: "p-42-1",
        url: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
        caption: "Altar central de invocación e iluminación ritual",
        tag: "Alquimia",
      },
      {
        id: "p-42-2",
        url: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
        caption: "Velas de cera pura consagrada y sahumerios",
        tag: "Artesanías",
      },
      {
        id: "p-42-3",
        url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
        caption: "Amuletos de obsidiana negra tallados a mano",
        tag: "Cristales",
      },
      {
        id: "p-42-4",
        url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
        caption: "Grimorios y manuscritos botánicos antiguos",
        tag: "Arte",
      },
    ],
  },
  {
    id: "ed-41",
    slug: "edicion-41-solsticio-invierno",
    number: 41,
    title: "Edición #41: Noche del Solsticio",
    subtitle: "El abrazo de la luz interior y los amuletos de noche",
    date: "21 & 22 de Diciembre, 2025",
    time: "12:00 PM – 9:00 PM",
    location: "Plaza de los Cedros & Galería del Lago",
    city: "Zona Norte",
    status: "Realizada",
    featuredCover: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80",
    shortDescription:
      "Una noche mágica bajo velas y linternas ceremoniales. Más de 2,000 asistentes disfrutaron de lecturas de oráculo y conciertos de música celta.",
    fullStory:
      "Durante la Noche del Solsticio, Mercado de Brujas reunió a cientos de familias y buscadores espirituales alrededor de una feria iluminada por más de 300 candelabros artesanales. La edición destacó por la feria de joyería en plata sagrada, la degustación de infusiones de hierbas nativas y el círculo de cantos rituales.",
    highlights: [
      "Concierto de Arpa y Flautas Celtas",
      "Feria de Ilusiones & Ilustración Mística",
      "Más de 40 Puestos de Herbolaria",
    ],
    attendeesCount: "2,200+ Asistentes",
    exhibitorsCount: "48 Marcas",
    gallery: [
      {
        id: "p-41-1",
        url: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
        caption: "Candelabros y fuegos de apertura en el Solsticio",
        tag: "Ritual",
      },
      {
        id: "p-41-2",
        url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
        caption: "Lecturas de Tarot bajo la pérgola de los cedros",
        tag: "Tarot",
      },
      {
        id: "p-41-3",
        url: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
        caption: "Frascos de esencias de lavanda y romero",
        tag: "Botanica",
      },
    ],
  },
  {
    id: "ed-40",
    slug: "edicion-40-aquelarre-otoño",
    number: 40,
    title: "Edición #40: Aquelarre de Otoño",
    subtitle: "Honrando el follaje y la memoria de las ancestras",
    date: "31 de Octubre & 1 de Noviembre, 2025",
    time: "2:00 PM – 10:00 PM",
    location: "Jardín Botánico Ancestral",
    city: "Zona Rosa",
    status: "Realizada",
    featuredCover: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
    shortDescription:
      "Nuestra emblemática celebración de Samhain con feria de arte oscuro, encuadernación artesanal, pan ceremonial y sahumerios de copal.",
    fullStory:
      "La Edición #40 fue un homenaje inolvidable a las tradiciones milenarias. El Jardín Botánico se vistió con flores de cempasúchil, velas de cera de panal y obras de más de 60 artistas visuales independientes. Contó con charlas sobre la historia de la brujería en Latinoamérica y exhibiciones de tallado de piedra obsidiana.",
    highlights: [
      "Ofrenda Ancestral Colectiva",
      "Muestra de Grabados & Arte Oscuro",
      "Taller de Elixires de Protección",
    ],
    attendeesCount: "3,100+ Asistentes",
    exhibitorsCount: "62 Marcas",
    gallery: [
      {
        id: "p-40-1",
        url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
        caption: "Escultura en obsidiana y altar de Samhain",
        tag: "Arte",
      },
      {
        id: "p-40-2",
        url: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
        caption: "Cosecha de hierbas aromáticas secadas al sol",
        tag: "Botanica",
      },
      {
        id: "p-40-3",
        url: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
        caption: "Prensa de flores y estampados artesanales",
        tag: "Diseño",
      },
    ],
  },
  {
    id: "ed-39",
    slug: "edicion-39-luna-de-sangre",
    number: 39,
    title: "Edición #39: Luna de Sangre",
    subtitle: "Fuerza telúrica y la magia de las obsidianas",
    date: "15 & 16 de Agosto, 2025",
    time: "11:00 AM – 8:00 PM",
    location: "Centro Cultural El Olimpo",
    city: "Distrito Histórico",
    status: "Realizada",
    featuredCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80",
    shortDescription:
      "Una feria conmemorativa enfocada en la mineralogía esotérica, cristales de protección y oráculos ancestrales.",
    fullStory:
      "La Edición #39 reunió a expertos en gemoterapia y artesanos del metal. Los visitantes recorrieron una nave histórica repleta de puestos con cuarzos maestros, barajas de autor y cerámica mística modelada a mano.",
    highlights: [
      "Exposición de Cuarzos & Cristales",
      "Barajas de Tarot de Autor",
      "Charlas de Mineralogía Sagrada",
    ],
    attendeesCount: "1,900+ Asistentes",
    exhibitorsCount: "42 Marcas",
    gallery: [
      {
        id: "p-39-1",
        url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
        caption: "Grimorios ilustrados e itinerario del evento",
        tag: "Manuscritos",
      },
      {
        id: "p-39-2",
        url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
        caption: "Collares y talismanes de piedra lunar y labradorita",
        tag: "Joyería",
      },
    ],
  },
];
