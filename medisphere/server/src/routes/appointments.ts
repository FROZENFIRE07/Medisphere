import express from 'express';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';
import { createAppointment, getUserAppointments } from '../controllers/appointmentController.js';
import { Request, Response } from 'express';

const router = express.Router();

router.post('/', authMiddleware as any, createAppointment);
router.get('/', authMiddleware as any, getUserAppointments);

export default router;

