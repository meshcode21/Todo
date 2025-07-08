import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';
import { protect } from './middleware/authMiddleware.js';

const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello Developers!');
});

// Routes
app.use('/api/auth',authRoutes);
app.use('/api/todos', protect, todoRoutes);

export default app;