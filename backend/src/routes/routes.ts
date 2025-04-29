import express from 'express';
import bookRoutes from './bookRoutes';
import reviewRoutes from './reviewRoutes'; // Você precisará criar este arquivo

const router = express.Router();

// Configuração de rotas
router.use('/api', bookRoutes);
router.use('/api', reviewRoutes); // Adicionar rotas de reviews

// Rota de health check
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

export default router;