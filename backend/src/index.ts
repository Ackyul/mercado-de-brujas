import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import healthRoutes from './routes/health.routes';
import productsRoutes from './routes/products.routes';
import editionsRoutes from './routes/editions.routes';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

// Middlewares
app.use(cors({
  origin: [FRONTEND_URL, 'http://localhost:3000'],
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api', healthRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/editions', editionsRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('🔮 Bienvenido a la API de Mercado de Brujas');
});

app.listen(PORT, () => {
  console.log(`✨ Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`🔌 Endpoints disponibles:`);
  console.log(`   - GET http://localhost:${PORT}/api/health`);
  console.log(`   - GET http://localhost:${PORT}/api/products`);
  console.log(`   - GET http://localhost:${PORT}/api/editions`);
});
