import express from 'express';
import cors from 'cors';
import {db} from './config/firebase';
import bookRoutes from './routes/bookRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);

app.get('/api/health', async (req, res) => {
    try {
      await db.collection('test').doc('test').get();
      res.status(200).json({ status: 'OK', database: 'connected' });
    } catch (error) {
      res.status(500).json({ status: 'ERROR', database: 'disconnected' });
    }
  });