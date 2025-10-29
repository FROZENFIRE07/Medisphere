import mongoose, { Document, Schema } from 'mongoose';

export interface IHospital extends Document {
  name: string;
  location: string;
  specialty: string[];
  website: string;
  logoUrl?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const HospitalSchema = new Schema<IHospital>(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    specialty: { type: [String], required: true },
    website: { type: String, required: true },
    logoUrl: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model<IHospital>('Hospital', HospitalSchema);

