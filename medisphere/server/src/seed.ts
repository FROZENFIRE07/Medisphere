import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { Hospital } from './models/Hospital.js';
import { User } from './models/User.js';

dotenv.config();

const hospitals = [
  {
    name: 'Dr. Hedgewar Hospital',
    location: 'Chh.Sambhajinagar, Maharashtra',
    specialty: ['cardiology', 'orthopedics', 'neurology', 'oncology'],
    website: 'https://www.hedgewar.org/',
    description: 'Super-specialty healthcare services with world-class facilities.',
  },
  {
    name: 'Medicover Hospital',
    location: 'Chh.Sambhajinagar, Maharashtra',
    specialty: ['cardiology', 'orthopedics', 'oncology', 'general surgery'],
    website: 'https://www.medicoverhospitals.in/hospitals/maharashtra/aurangabad/',
    description: 'Leading healthcare institution delivering comprehensive medical care.',
  },
  {
    name: 'Seth Nandlal Dhoot Hospital',
    location: 'Chh.Sambhajinagar, Maharashtra',
    specialty: ['cardiology', 'orthopedics', 'pediatrics', 'dermatology'],
    website: 'https://dhoothospitals.com/',
    description: 'Trusted healthcare provider with advanced medical technology.',
  },
  {
    name: 'Kamalnayan Bajaj Hospital',
    location: 'Chh.Sambhajinagar, Maharashtra',
    specialty: ['cardiology', 'neurology', 'oncology', 'general surgery'],
    website: 'https://bajajhospital.com/',
    description: 'Excellence in patient care with multidisciplinary approach.',
  },
  {
    name: 'United Ciigma Hospital',
    location: 'Chh.Sambhajinagar, Maharashtra',
    specialty: ['cardiology', 'orthopedics', 'pediatrics', 'neurology'],
    website: 'https://www.ciigmagroup.org/',
    description: 'Dedicated to providing exceptional healthcare services.',
  },
];

async function seedDatabase() {
  try {
    await connectDB();

    // Clear existing data
    await Hospital.deleteMany({});
    console.log('Cleared existing hospitals');

    // Insert hospitals
    await Hospital.insertMany(hospitals);
    console.log(`Seeded ${hospitals.length} hospitals`);

    // Create a test user
    const existingUser = await User.findOne({ email: 'patient@medisphere.com' });
    if (!existingUser) {
      const testUser = await User.create({
        name: 'Test Patient',
        email: 'patient@medisphere.com',
        password: 'password123',
        phone: '+1234567890',
        role: 'patient',
      });
      console.log('Created test user:', testUser.email);
    }

    console.log('Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();

