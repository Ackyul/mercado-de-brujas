"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const health_routes_1 = __importDefault(require("./routes/health.routes"));
const products_routes_1 = __importDefault(require("./routes/products.routes"));
const editions_routes_1 = __importDefault(require("./routes/editions.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
// Middlewares
app.use((0, cors_1.default)({
    origin: [FRONTEND_URL, 'http://localhost:3000'],
    credentials: true,
}));
app.use(express_1.default.json());
// Routes
app.use('/api', health_routes_1.default);
app.use('/api/products', products_routes_1.default);
app.use('/api/editions', editions_routes_1.default);
app.get('/', (req, res) => {
    res.send('🔮 Bienvenido a la API de Mercado de Brujas');
});
app.listen(PORT, () => {
    console.log(`✨ Servidor ejecutándose en http://localhost:${PORT}`);
    console.log(`🔌 Endpoints disponibles:`);
    console.log(`   - GET http://localhost:${PORT}/api/health`);
    console.log(`   - GET http://localhost:${PORT}/api/products`);
    console.log(`   - GET http://localhost:${PORT}/api/editions`);
});
