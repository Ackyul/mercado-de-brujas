import { Router, Request, Response } from 'express';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: '🧙‍♀️ Mercado de Brujas API Backend funcionando correctamente',
    timestamp: new Date().toISOString(),
    services: {
      neonDb: process.env.DATABASE_URL ? 'Configurado' : 'Falta DATABASE_URL',
      cloudinary: process.env.CLOUDINARY_CLOUD_NAME ? 'Configurado' : 'Falta CLOUDINARY_CLOUD_NAME',
    },
  });
});

export default router;
