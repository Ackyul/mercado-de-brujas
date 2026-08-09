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
    slug: "edicion-42-equinoccio",
    number: 42,
    title: "Edición #42: Luna Llena de Equinoccio",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "24 & 25 de Agosto, 2026",
    time: "11:00 AM – 8:00 PM",
    location: "Casona Cultural Mística (Jardines Principales)",
    city: "Centro Histórico",
    status: "Próxima",
    featuredCover: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=1000&q=80",
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
      {
        id: "p-42-1",
        url: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
        caption: "Lorem ipsum dolor sit amet",
        tag: "Alquimia",
      },
      {
        id: "p-42-2",
        url: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
        caption: "Consectetur adipiscing elit",
        tag: "Artesanías",
      },
      {
        id: "p-42-3",
        url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
        caption: "Sed do eiusmod tempor",
        tag: "Cristales",
      },
      {
        id: "p-42-4",
        url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
        caption: "Ut labore et dolore magna",
        tag: "Arte",
      },
    ],
  },
  {
    id: "ed-41",
    slug: "edicion-41-solsticio-invierno",
    number: 41,
    title: "Edición #41: Noche del Solsticio",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "21 & 22 de Diciembre, 2025",
    time: "12:00 PM – 9:00 PM",
    location: "Plaza de los Cedros & Galería del Lago",
    city: "Zona Norte",
    status: "Realizada",
    featuredCover: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80",
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
      {
        id: "p-41-1",
        url: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
        caption: "Lorem ipsum dolor sit amet",
        tag: "Ritual",
      },
      {
        id: "p-41-2",
        url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
        caption: "Consectetur adipiscing elit",
        tag: "Tarot",
      },
      {
        id: "p-41-3",
        url: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
        caption: "Sed do eiusmod tempor",
        tag: "Botanica",
      },
    ],
  },
  {
    id: "ed-40",
    slug: "edicion-40-aquelarre-otoño",
    number: 40,
    title: "Edición #40: Aquelarre de Otoño",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "31 de Octubre & 1 de Noviembre, 2025",
    time: "2:00 PM – 10:00 PM",
    location: "Jardín Botánico Ancestral",
    city: "Zona Rosa",
    status: "Realizada",
    featuredCover: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
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
      {
        id: "p-40-1",
        url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
        caption: "Lorem ipsum dolor sit amet",
        tag: "Arte",
      },
      {
        id: "p-40-2",
        url: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
        caption: "Consectetur adipiscing elit",
        tag: "Botanica",
      },
      {
        id: "p-40-3",
        url: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
        caption: "Sed do eiusmod tempor",
        tag: "Diseño",
      },
    ],
  },
  {
    id: "ed-39",
    slug: "edicion-39-luna-de-sangre",
    number: 39,
    title: "Edición #39: Luna de Sangre",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "15 & 16 de Agosto, 2025",
    time: "11:00 AM – 8:00 PM",
    location: "Centro Cultural El Olimpo",
    city: "Distrito Histórico",
    status: "Realizada",
    featuredCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80",
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
      {
        id: "p-39-1",
        url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
        caption: "Lorem ipsum dolor sit amet",
        tag: "Manuscritos",
      },
      {
        id: "p-39-2",
        url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
        caption: "Consectetur adipiscing elit",
        tag: "Joyería",
      },
    ],
  },
];
