import express, { Request, Response, Router } from 'express';
import { addReview, getReviews } from '../controllers/reviewsController';

const router: Router = express.Router();

// Adicionar resenha
router.post('/reviews', addReview);

// Obter resenhas por ISBN
router.get('/reviews', getReviews);

export default router;