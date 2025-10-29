import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { Appointment } from '../models/Appointment';

export const createAppointment = async (req: AuthRequest, res: Response) => {
  try {
    const { hospitalId, date, reason, notes } = req.body;
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const appointment = await Appointment.create({
      userId,
      hospitalId,
      date,
      reason,
      notes,
    });

    res.status(201).json(appointment);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserAppointments = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const appointments = await Appointment.find({ userId })
      .populate('hospitalId', 'name location specialty')
      .sort({ date: -1 });

    res.json(appointments);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

