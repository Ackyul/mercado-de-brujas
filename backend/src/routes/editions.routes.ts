import { Router, Request, Response } from 'express';

const router = Router();

// Mock in-memory storage synced with frontend data
let editionsStore = [
  {
    id: "ed-42",
    slug: "edicion-42",
    number: 42,
    title: "Edición #42",
    date: "24 & 25 de Agosto, 2026",
    time: "11:00 AM – 8:00 PM",
    location: "Casona Cultural Mística (Jardines Principales)",
    city: "Centro Histórico",
    status: "Próxima",
    featuredCover: "",
    shortDescription: "Mercado de Brujas edición pop-up mística",
    fullStory: "Relato de la edición 42 del mercado místico...",
    highlights: ["Ritual Místico", "Artesanías", "Botánica"],
    attendeesCount: "Esperados ~2,500",
    exhibitorsCount: "55 Marcas",
    gallery: [
      { id: "p-42-1", url: "", caption: "Ritual de Apertura Mística", tag: "Feria" },
      { id: "p-42-2", url: "", caption: "Exposición de Botánica & Pociones", tag: "Artefactos" },
      { id: "p-42-3", url: "", caption: "Lecturas de Oráculo Ancestral", tag: "Rituales" },
    ],
  },
];

// GET /api/editions
router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: editionsStore,
  });
});

// POST /api/editions
router.post('/', (req: Request, res: Response) => {
  const newEdition = {
    id: `ed-${Date.now()}`,
    slug: req.body.slug || `edicion-${req.body.number || Date.now()}`,
    gallery: [],
    ...req.body,
  };
  editionsStore.unshift(newEdition);
  res.status(201).json({
    success: true,
    data: newEdition,
    message: "Edición creada exitosamente",
  });
});

// PUT /api/editions/:slug
router.put('/:slug', (req: Request, res: Response) => {
  const { slug } = req.params;
  const idx = editionsStore.findIndex((e) => e.slug === slug);
  if (idx === -1) {
    return res.status(404).json({ success: false, message: "Edición no encontrada" });
  }
  editionsStore[idx] = { ...editionsStore[idx], ...req.body };
  res.json({ success: true, data: editionsStore[idx] });
});

// DELETE /api/editions/:slug
router.delete('/:slug', (req: Request, res: Response) => {
  const { slug } = req.params;
  editionsStore = editionsStore.filter((e) => e.slug !== slug);
  res.json({ success: true, message: "Edición eliminada exitosamente" });
});

// POST /api/editions/:slug/gallery
router.post('/:slug/gallery', (req: Request, res: Response) => {
  const { slug } = req.params;
  const edition = editionsStore.find((e) => e.slug === slug);
  if (!edition) {
    return res.status(404).json({ success: false, message: "Edición no encontrada" });
  }
  const newPhoto = {
    id: `p-${Date.now()}`,
    url: req.body.url || "",
    caption: req.body.caption || "Fotografía de la edición",
    tag: req.body.tag || "Feria",
  };
  edition.gallery.unshift(newPhoto);
  res.status(201).json({ success: true, data: newPhoto });
});

// DELETE /api/editions/:slug/gallery/:photoId
router.delete('/:slug/gallery/:photoId', (req: Request, res: Response) => {
  const { slug, photoId } = req.params;
  const edition = editionsStore.find((e) => e.slug === slug);
  if (!edition) {
    return res.status(404).json({ success: false, message: "Edición no encontrada" });
  }
  edition.gallery = edition.gallery.filter((p) => p.id !== photoId);
  res.json({ success: true, message: "Foto eliminada exitosamente" });
});

export default router;
