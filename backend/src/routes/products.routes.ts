import { Router, Request, Response } from 'express';

const router = Router();

// Mock initial data for Mercado de Brujas
const sampleProducts = [
  {
    id: '1',
    name: 'Elixir de la Luna Llena',
    category: 'Pociones',
    price: 45.0,
    rating: 4.9,
    description: 'Esencia alquímica purificada bajo el resplandor de la luna en cénit. Otorga claridad mental e intuición profunda.',
    image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=600&q=80',
    stock: 12,
  },
  {
    id: '2',
    name: 'Talisman de Obsidiana Negra',
    category: 'Amuletos',
    price: 68.5,
    rating: 5.0,
    description: 'Piedra volcánica esculpida a mano para protección contra energías densas y escudo de la mente psíquica.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
    stock: 7,
  },
  {
    id: '3',
    name: 'Grimorio de Hierbas y Encantamientos',
    category: 'Libros & Manuscritos',
    price: 120.0,
    rating: 4.8,
    description: 'Encuadernación de cuero místico con fórmulas antiguas, botánica sagrada y rituales de consagración.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    stock: 4,
  },
  {
    id: '4',
    name: 'Vela Ritual de Salvia y Lapislázuli',
    category: 'Velas & Inciensos',
    price: 28.0,
    rating: 4.7,
    description: 'Cera de abeja pura infundida con aceite esencial de salvia blanca y microcristales de lapislázuli.',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80',
    stock: 20,
  },
];

router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: sampleProducts,
  });
});

export default router;
