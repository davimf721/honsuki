import express from 'express';
import bookRoutes from './bookRoutes';

const router = express.Router();

// Configuração básica de rotas
router.use('/api',bookRoutes,);

// Rota de health check
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

export default router;