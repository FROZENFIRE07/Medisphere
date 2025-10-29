# Medisphere: Your Health Connect

A world-class, visually stunning healthcare network platform built with the MERN stack. Medisphere connects patients with elite healthcare institutions worldwide through a beautiful, modern interface.

![Medisphere](https://img.shields.io/badge/Medisphere-Healthcare%20Platform-0A6CFF?style=for-the-badge)
![MERN](https://img.shields.io/badge/MERN-Full%20Stack-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge)

## 🎨 Features

- **Modern UI/UX**: Stunning glassmorphism design with Framer Motion animations
- **Full MERN Stack**: React 18, Node.js, Express, MongoDB
- **Authentication**: Secure JWT-based auth system
- **Hospital Search**: Advanced search and filtering
- **Patient Portal**: Complete dashboard for appointments and records
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safe**: Full TypeScript implementation
- **Beautiful Components**: ShadCN UI inspired components with Lucide Icons

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- npm or yarn
- MongoDB Atlas account (connection string provided)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd medisphere
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Set up environment variables:
```bash
# Create a .env file in the server directory
MONGO_URI=mongodb+srv://dipakaghade1185:xlq0cR6xT8kt0zgX@cluster0.n8vepyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=dipak
PORT=5000
NODE_ENV=development
```

4. Start the backend server:
```bash
npm run dev
```

5. In a new terminal, install client dependencies:
```bash
cd ../client
npm install
```

6. Start the frontend:
```bash
npm run dev
```

7. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
medisphere/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context (Auth)
│   │   ├── lib/           # API utilities
│   │   └── assets/        # Static assets
│   ├── public/
│   └── package.json
│
├── server/                 # Express backend
│   ├── src/
│   │   ├── config/        # Database configuration
│   │   ├── models/        # MongoDB models
│   │   ├── controllers/   # Route handlers
│   │   ├── middleware/    # Auth middleware
│   │   ├── routes/        # API routes
│   │   └── server.ts      # Entry point
│   └── package.json
│
└── README.md
```

## 🎯 Pages & Features

### 1. Home Page (/)
- Hero section with animated background
- Featured hospitals showcase
- Statistics cards
- Call-to-action buttons

### 2. Find Hospital (/find-hospital)
- Advanced search with filters
- Location and specialty filtering
- Real-time search results
- Beautiful hospital cards

### 3. About Us (/about)
- Vision and mission
- Network scale statistics
- Patient safety commitment

### 4. Leadership (/leadership)
- Team member profiles
- Guiding principles

### 5. Reviews (/reviews)
- Patient testimonials carousel
- 4.8/5.0 overall rating
- Video testimonials

### 6. Patient Portal (/portal) - Protected
- Dashboard with upcoming appointments
- Book new appointments
- Medical records access
- Personal health information

### 7. Authentication
- Login (/login)
- Register (/register)
- JWT-based protection

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Register

### Hospitals
- `GET /api/hospitals` - Get all hospitals
- `GET /api/hospitals/search?q=&location=&specialty=` - Search hospitals

### Appointments (Protected)
- `GET /api/appointments` - Get user appointments
- `POST /api/appointments` - Create appointment

## 🎨 Design System

### Colors
- **Primary**: #0A6CFF (vibrant medical blue)
- **Secondary**: #00D4A1 (healing green)
- **Background**: #F8FAFC → #FFFFFF gradient
- **Text**: #1E293B (dark slate)

### Typography
- **Headings**: Inter Tight (bold, modern)
- **Body**: Inter (clean, readable)

### Components
- Glassmorphic cards
- Gradient buttons with shimmer
- Floating search bar
- Testimonial carousel
- 3D hover effects

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons
- React Router DOM v6
- React Hook Form
- Zustand (state management)
- Axios
- React Hot Toast

### Backend
- Node.js
- Express
- TypeScript
- MongoDB with Mongoose
- JWT authentication
- bcryptjs
- Zod (validation)

## 📦 Scripts

### Server
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
```

### Client
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🌍 Deployment

### Backend (Server)
1. Set up environment variables on your hosting platform
2. Build the TypeScript code: `npm run build`
3. Start the server: `npm start`

### Frontend (Client)
1. Build the React app: `npm run build`
2. Deploy the `dist` folder to Vercel, Netlify, or your preferred platform

## 🔒 Security Features
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes
- Input validation
- CORS configuration
- Environment variable security

## 🎉 Credits

- **Framework**: React + Express
- **Database**: MongoDB Atlas
- **UI Components**: Custom with Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📄 License

© 2025 Medisphere Global Health Network. All rights reserved.

## 🙏 Thank You

Built with ❤️ for modern healthcare.

---

**Medisphere - Connecting You to World-Class Care** 🌍💙

