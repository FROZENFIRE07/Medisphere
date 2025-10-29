import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import hospitalRoutes from './routes/hospitals.js';
import appointmentRoutes from './routes/appointments.js';

dotenv.config();

// Ensure DB is connected on cold start (serverless safe)
connectDB();

const app = express();

// DYNAMIC CORS — ONLY YOUR FRONTEND
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('CORS BLOCKED:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/appointments', appointmentRoutes);

// Root
app.get('/', (req, res) => {
  res.json({ message: 'Medisphere API Live', time: new Date().toISOString() });
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Medisphere API is running' });
});

export default app;
