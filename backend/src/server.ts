import express from 'express';
import bookRoutes from './routes/routes';

const app = express();

// Middlewares essenciais
app.use(express.json());

// Configuração das rotas
app.use('/api', bookRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});