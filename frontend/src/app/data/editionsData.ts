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

const LOREM_SHORT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const LOREM_LONG = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const EDITIONS_DATA: Edition[] = [
  {
    id: "ed-42",
    slug: "edicion-42",
    number: 42,
    title: "Edición #42",
    subtitle: "",
    date: "24 & 25 de Agosto, 2026",
    time: "11:00 AM – 8:00 PM",
    location: "Casona Cultural Mística (Jardines Principales)",
    city: "Centro Histórico",
    status: "Próxima",
    featuredCover: "",
    shortDescription: LOREM_SHORT,
    fullStory: LOREM_LONG,
    highlights: [
      "Lorem ipsum dolor",
      "Consectetur adipiscing",
      "Sed do eiusmod tempor",
      "Ut labore et dolore",
    ],
    attendeesCount: "Esperados ~2,500",
    exhibitorsCount: "55 Marcas",
    gallery: [
      { id: "p-42-1", url: "", caption: "Ritual de Apertura Mística", tag: "Feria" },
      { id: "p-42-2", url: "", caption: "Exposición de Botánica & Pociones", tag: "Artefactos" },
      { id: "p-42-3", url: "", caption: "Lecturas de Oráculo Ancestral", tag: "Rituales" },
      { id: "p-42-4", url: "", caption: "Música & Danza Esotérica", tag: "Música" },
      { id: "p-42-5", url: "", caption: "Mercado de Arte & Velas", tag: "Artesanías" },
      { id: "p-42-6", url: "", caption: "Jardines de la Casona Cultural", tag: "Ubicación" },
      { id: "p-42-7", url: "", caption: "Cierre Astral del Aquelarre", tag: "Comunidad" },
      { id: "p-42-8", url: "", caption: "Taller de Hierbas Sagradas", tag: "Talleres" },
    ],
  },
  {
    id: "ed-41",
    slug: "edicion-41",
    number: 41,
    title: "Edición #41",
    subtitle: "",
    date: "21 & 22 de Diciembre, 2025",
    time: "12:00 PM – 9:00 PM",
    location: "Plaza de los Cedros & Galería del Lago",
    city: "Zona Norte",
    status: "Realizada",
    featuredCover: "",
    shortDescription: LOREM_SHORT,
    fullStory: LOREM_LONG,
    highlights: [
      "Lorem ipsum dolor",
      "Consectetur adipiscing",
      "Sed do eiusmod tempor",
    ],
    attendeesCount: "2,200+ Asistentes",
    exhibitorsCount: "48 Marcas",
    gallery: [
      { id: "p-41-1", url: "", caption: "Altar Solsticial de Invierno", tag: "Solsticio" },
      { id: "p-41-2", url: "", caption: "Feria Pop-Up Nocturna", tag: "Noche" },
      { id: "p-41-3", url: "", caption: "Iluminación Mística del Lago", tag: "Luz" },
      { id: "p-41-4", url: "", caption: "Muestra Gastronómica Ancestral", tag: "Comida" },
      { id: "p-41-5", url: "", caption: "Stands de Joyería & Gemas", tag: "Joyería" },
      { id: "p-41-6", url: "", caption: "Encuentro de Sahumerios", tag: "Inciensos" },
      { id: "p-41-7", url: "", caption: "Concierto de Cuencos de Cobre", tag: "Sonido" },
      { id: "p-41-8", url: "", caption: "Celebración del Solsticio", tag: "Fiesta" },
    ],
  },
  {
    id: "ed-40",
    slug: "edicion-40",
    number: 40,
    title: "Edición #40",
    subtitle: "",
    date: "31 de Octubre & 1 de Noviembre, 2025",
    time: "2:00 PM – 10:00 PM",
    location: "Jardín Botánico Ancestral",
    city: "Zona Rosa",
    status: "Realizada",
    featuredCover: "",
    shortDescription: LOREM_SHORT,
    fullStory: LOREM_LONG,
    highlights: [
      "Lorem ipsum dolor",
      "Consectetur adipiscing",
      "Sed do eiusmod tempor",
    ],
    attendeesCount: "3,100+ Asistentes",
    exhibitorsCount: "62 Marcas",
    gallery: [
      { id: "p-40-1", url: "", caption: "Edición Especial Samhain", tag: "Samhain" },
      { id: "p-40-2", url: "", caption: "Disfraz & Vestimenta Mística", tag: "Arte" },
      { id: "p-40-3", url: "", caption: "Círculo de Tambores Tribales", tag: "Ritual" },
      { id: "p-40-4", url: "", caption: "Exposición de Amuletos", tag: "Amuletos" },
      { id: "p-40-5", url: "", caption: "Jardín de Luces & Fuego", tag: "Noche" },
      { id: "p-40-6", url: "", caption: "Charlas sobre Magia Verde", tag: "Charlas" },
      { id: "p-40-7", url: "", caption: "Venta de Cristales Energéticos", tag: "Cristales" },
      { id: "p-40-8", url: "", caption: "Comunidad del Aquelarre", tag: "Comunidad" },
    ],
  },
  {
    id: "ed-39",
    slug: "edicion-39",
    number: 39,
    title: "Edición #39",
    subtitle: "",
    date: "15 & 16 de Agosto, 2025",
    time: "11:00 AM – 8:00 PM",
    location: "Centro Cultural El Olimpo",
    city: "Distrito Histórico",
    status: "Realizada",
    featuredCover: "",
    shortDescription: LOREM_SHORT,
    fullStory: LOREM_LONG,
    highlights: [
      "Lorem ipsum dolor",
      "Consectetur adipiscing",
      "Sed do eiusmod tempor",
    ],
    attendeesCount: "1,900+ Asistentes",
    exhibitorsCount: "42 Marcas",
    gallery: [
      { id: "p-39-1", url: "", caption: "Feria del Olimpo Cultural", tag: "Cultura" },
      { id: "p-39-2", url: "", caption: "Demostración de Alquimia", tag: "Alquimia" },
      { id: "p-39-3", url: "", caption: "Confección de Talismanes", tag: "Talismanes" },
      { id: "p-39-4", url: "", caption: "Cata de Té Herbal", tag: "Botánica" },
      { id: "p-39-5", url: "", caption: "Exposición de Grabados Esotéricos", tag: "Ilustración" },
      { id: "p-39-6", url: "", caption: "Taller de Velas Aromáticas", tag: "Velas" },
      { id: "p-39-7", url: "", caption: "Lecturas Astrológicas", tag: "Astrología" },
      { id: "p-39-8", url: "", caption: "Fotografía de Clausura", tag: "Final" },
    ],
  },
  {
    id: "ed-38",
    slug: "edicion-38",
    number: 38,
    title: "Edición #38",
    subtitle: "",
    date: "10 & 11 de Mayo, 2025",
    time: "11:00 AM – 8:00 PM",
    location: "Pabellón Botánico del Valle",
    city: "Distrito Cultural",
    status: "Realizada",
    featuredCover: "",
    shortDescription: LOREM_SHORT,
    fullStory: LOREM_LONG,
    highlights: [
      "Lorem ipsum dolor",
      "Consectetur adipiscing",
      "Sed do eiusmod tempor",
    ],
    attendeesCount: "2,050+ Asistentes",
    exhibitorsCount: "50 Marcas",
    gallery: [
      { id: "p-38-1", url: "", caption: "Encuentro Primavera Mística", tag: "Primavera" },
      { id: "p-38-2", url: "", caption: "Exposición de Cerámica Sagrada", tag: "Arte" },
      { id: "p-38-3", url: "", caption: "Taller de Fitoterapia Ancestral", tag: "Botánica" },
      { id: "p-38-4", url: "", caption: "Círculo de Cantos Medicinales", tag: "Música" },
      { id: "p-38-5", url: "", caption: "Mercado de Piedras de Poder", tag: "Gemas" },
      { id: "p-38-6", url: "", caption: "Danza Ritual Nocturna", tag: "Ritual" },
      { id: "p-38-7", url: "", caption: "Venta de Inciensos Naturales", tag: "Aromas" },
      { id: "p-38-8", url: "", caption: "Foto de la Comunidad", tag: "Comunidad" },
    ],
  },
  {
    id: "ed-37",
    slug: "edicion-37",
    number: 37,
    title: "Edición #37",
    subtitle: "",
    date: "22 & 23 de Febrero, 2025",
    time: "12:00 PM – 9:00 PM",
    location: "Antiguo Convento de los Arcos",
    city: "Centro Histórico",
    status: "Realizada",
    featuredCover: "",
    shortDescription: LOREM_SHORT,
    fullStory: LOREM_LONG,
    highlights: [
      "Lorem ipsum dolor",
      "Consectetur adipiscing",
      "Sed do eiusmod tempor",
    ],
    attendeesCount: "1,800+ Asistentes",
    exhibitorsCount: "40 Marcas",
    gallery: [
      { id: "p-37-1", url: "", caption: "Aquelarre en el Convento", tag: "Patrimonio" },
      { id: "p-37-2", url: "", caption: "Taller de Tarot Esotérico", tag: "Tarot" },
      { id: "p-37-3", url: "", caption: "Feria de Arte de Autor", tag: "Ilustración" },
      { id: "p-37-4", url: "", caption: "Ritual de Purificación con Sal", tag: "Purificación" },
      { id: "p-37-5", url: "", caption: "Exposición de Grimorios Manuscritos", tag: "Libros" },
      { id: "p-37-6", url: "", caption: "Círculo de Tambores Esotéricos", tag: "Ritual" },
      { id: "p-37-7", url: "", caption: "Muestra de Aceites Esenciales", tag: "Aceites" },
      { id: "p-37-8", url: "", caption: "Fotografía Final del Encuentro", tag: "Comunidad" },
    ],
  },
];
