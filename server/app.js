// server/app.js
import express from 'express';
import cors from 'cors';
import exampleRoutes from './routes/exampleRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/example', exampleRoutes);

export default app;
