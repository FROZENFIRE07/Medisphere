import { Request, Response } from 'express';
import { Hospital } from '../models/Hospital';

export const getAllHospitals = async (req: Request, res: Response) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const searchHospitals = async (req: Request, res: Response) => {
  try {
    const { q, location, specialty } = req.query;

    const query: any = {};

    if (location) {
      query.location = { $regex: location as string, $options: 'i' };
    }

    if (specialty) {
      query.specialty = { $in: [(specialty as string).split(',')] };
    }

    if (q) {
      query.$or = [
        { name: { $regex: q as string, $options: 'i' } },
        { location: { $regex: q as string, $options: 'i' } },
        { description: { $regex: q as string, $options: 'i' } },
      ];
    }

    const hospitals = await Hospital.find(query);
    res.json(hospitals);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

