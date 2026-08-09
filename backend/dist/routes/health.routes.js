"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/health', (req, res) => {
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
exports.default = router;
