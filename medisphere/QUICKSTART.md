# ⚡ Quick Start Guide - Medisphere

Get Medisphere running in 3 minutes!

## 🚀 Fast Setup

### Step 1: Install Dependencies

Open terminal in the project root and run:

```bash
# Install all dependencies
cd server && npm install && cd ../client && npm install
```

### Step 2: Setup Database

```bash
cd server
npm run seed
```

This creates:
- 5 hospitals in the database
- 1 test user (email: `patient@medisphere.com`, password: `password123`)

### Step 3: Start Servers

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
✅ Server running on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```
✅ App running on http://localhost:3000

### Step 4: Explore!

Open http://localhost:3000 in your browser and enjoy! 🎉

---

## 📋 Test Login

Use these credentials to test the patient portal:
- **Email**: patient@medisphere.com
- **Password**: password123

Or create a new account through the register page.

---

## 🎯 What You'll See

1. **Home Page** - Beautiful hero section with featured hospitals
2. **Find Hospital** - Search and filter by location and specialty
3. **About Us** - Company vision and mission
4. **Leadership** - Team member profiles
5. **Reviews** - Patient testimonials and ratings
6. **Portal** - Login to access patient dashboard

---

## 🐛 Troubleshooting

**Port 3000 in use?**
- Change port in `client/vite.config.ts`

**MongoDB connection failed?**
- Check `.env` file in server directory
- Ensure internet connection (MongoDB Atlas is cloud-based)

**Module not found?**
```bash
# Clean reinstall
cd server
rm -rf node_modules
npm install

cd ../client
rm -rf node_modules
npm install
```

---

## 📚 More Info

- Full setup: See `SETUP.md`
- Project details: See `PROJECT_SUMMARY.md`
- API documentation: See `README.md`

---

**That's it! You're ready to explore Medisphere! 🏥✨**

