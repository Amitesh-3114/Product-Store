# 🛒 Product Store

A full-stack **MERN** (MongoDB, Express, React, Node.js) application for managing a product catalog. Add, view, update, and delete products through a clean, responsive UI built with **Chakra UI** and powered by an **Express + MongoDB** REST API.

🔗 **Live Demo:** [https://your-vercel-app.vercel.app](https://your-vercel-app.vercel.app) <!-- replace with your actual Vercel URL -->

---

## ✨ Features

- 📦 View all products in a responsive grid layout
- ➕ Add new products (name, price, image URL)
- ✏️ Edit existing products via a modal dialog
- 🗑️ Delete products
- 🔔 Toast notifications for success/error feedback
- 🌗 Light/dark mode support (Chakra UI color mode)
- ⚡ Optimistic UI updates (no page refresh needed)

---

## 🛠️ Tech Stack

**Frontend**
- React 19 + Vite
- Chakra UI
- Zustand (state management)
- React Router DOM

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- dotenv, cors

**Deployment**
- Vercel

---

## 📁 Project Structure

```
Product-Store/
├── backend/
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   ├── controller/
│   │   └── product.controller.js  # CRUD logic
│   ├── models/
│   │   └── product.model.js       # Mongoose schema
│   ├── routes/
│   │   └── product.route.js       # API routes
│   └── server.js                  # Express app entry point
├── frontend/
│   ├── src/
│   │   ├── Pages/                 # Home & Create pages
│   │   ├── components/            # ProductCard, Navbar, etc.
│   │   ├── Store/                 # Zustand store
│   │   └── App.jsx
│   └── vite.config.js
├── package.json
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint            | Description           |
|--------|---------------------|------------------------|
| GET    | `/api/products`     | Get all products       |
| POST   | `/api/products`     | Create a new product    |
| PUT    | `/api/products/:id` | Update an existing product |
| DELETE | `/api/products/:id` | Delete a product        |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A MongoDB connection string (e.g. from [MongoDB Atlas](https://www.mongodb.com/atlas))

### 1. Clone the repository
```bash
git clone https://github.com/Amitesh-3114/Product-Store.git
cd Product-Store
```

### 2. Set up environment variables
Create a `.env` file in the **root** directory:

```env
MONG_URI=your_mongodb_connection_string
PORT=5001
NODE_ENV=development
```

### 3. Install dependencies
```bash
# install backend dependencies
npm install

# install frontend dependencies
cd frontend
npm install
cd ..
```

### 4. Run in development
The backend and frontend run separately during development (frontend proxies `/api` requests to `http://localhost:5001`):

```bash
# terminal 1 - start backend (with nodemon)
npm run dev

# terminal 2 - start frontend
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5001`.

### 5. Build for production
```bash
npm run build   # installs deps and builds the frontend
npm start       # serves the built frontend via Express
```

---

## ☁️ Deployment (Vercel)

This project is deployed on [Vercel](https://vercel.com). 
link: [product-store](https://product-store-4tne.onrender.com).
When configuring the project on Vercel:

| Setting | Value |
|---|---|
| **Build Command** | `npm run build` |
| **Output Directory** | `frontend/dist` |
| **Install Command** | `npm install` |
| **Environment Variables** | `MONG_URI`, `NODE_ENV=production` |

> ⚠️ Note: Make sure your MongoDB Atlas cluster's network access allows connections from anywhere (`0.0.0.0/0`) so Vercel's servers can reach your database.

---

