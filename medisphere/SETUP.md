# Medisphere Setup Guide

## 🚀 Complete Setup Instructions

Follow these steps to get Medisphere running on your local machine.

### Step 1: Install Dependencies

#### Option A: Install Server and Client Separately (Recommended)

**Server:**
```bash
cd server
npm install
```

**Client:**
```bash
cd client
npm install
```

#### Option B: Install Everything at Once
```bash
npm install
npm run install-all
```

### Step 2: Configure Backend

1. Navigate to `server` directory
2. The `.env` file should already be created with the MongoDB connection string
3. If not, create a `.env` file with:
```env
MONGO_URI=mongodb+srv://dipakaghade1185:xlq0cR6xT8kt0zgX@cluster0.n8vepyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=dipak
PORT=5000
NODE_ENV=development
```

### Step 3: Seed the Database

Populate the database with initial hospital data:
```bash
cd server
npm run seed
```

This will:
- Create 5 featured hospitals
- Create a test user (email: `patient@medisphere.com`, password: `password123`)

### Step 4: Start the Development Servers

#### Option A: Run Separately

**Terminal 1 - Start Backend:**
```bash
cd server
npm run dev
```
Backend will run on: http://localhost:5000

**Terminal 2 - Start Frontend:**
```bash
cd client
npm run dev
```
Frontend will run on: http://localhost:3000

#### Option B: Run Both Together
```bash
npm run dev
```
(Requires installing concurrently: `npm install -g concurrently`)

### Step 5: Access the Application

Open your browser and navigate to:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 📋 Available Scripts

### Server Scripts
```bash
cd server
npm run dev        # Start development server with hot reload
npm run build      # Build for production
npm start          # Start production server
npm run seed       # Seed database with initial data
```

### Client Scripts
```bash
cd client
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 🧪 Test Credentials

After seeding the database, you can use:
- **Email**: patient@medisphere.com
- **Password**: password123

Or create a new account through the register page.

## 🎯 Features to Explore

1. **Home Page**: Browse featured hospitals and statistics
2. **Find Hospital**: Search and filter hospitals by location and specialty
3. **About Us**: Learn about Medisphere's mission
4. **Leadership**: Meet the team
5. **Reviews**: Read patient testimonials
6. **Patient Portal**: Access your dashboard (requires login)

## 🔧 Troubleshooting

### Port Already in Use
If port 3000 or 5000 is in use:
- **Backend**: Change `PORT` in server `.env` file
- **Frontend**: Update `vite.config.ts` server port

### MongoDB Connection Issues
- Verify the `MONGO_URI` in `.env` is correct
- Check your internet connection
- MongoDB Atlas may require IP whitelisting

### Module Not Found Errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## 📦 Production Build

### Build Client
```bash
cd client
npm run build
# Output: dist/
```

### Build Server
```bash
cd server
npm run build
# Output: dist/
```

### Run Production
```bash
cd server
npm start
```

## 🎨 Customization

### Colors
Edit `client/tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: '#0A6CFF',     // Vibrant medical blue
  secondary: '#00D4A1',   // Healing green
  background: '#F8FAFC',  // Light background
  text: '#1E293B',       // Dark slate
}
```

### Hospitals
Add more hospitals by editing `server/src/seed.ts` or through the API.

## 🌐 Deployment

### Deploy Backend (Heroku/Railway/Render)
1. Push to GitHub
2. Connect to hosting platform
3. Set environment variables
4. Deploy!

### Deploy Frontend (Vercel/Netlify)
1. Build: `npm run build`
2. Deploy the `dist` folder
3. Set API URL environment variable

## 📞 Support

For issues or questions:
- Check the README.md
- Review code comments
- Contact: info@medisphere.global (placeholder)

## ✨ Next Steps

After setup:
1. Seed the database
2. Explore all pages
3. Test authentication
4. Book an appointment
5. Customize as needed

---

**Happy Coding! 🚀**

