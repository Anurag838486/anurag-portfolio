# 🚀 Anurag Sharma — Personal Portfolio

A full-stack personal portfolio built with **React**, **Node.js**, and **MongoDB**.

---

## ✨ Features

- 🎨 Dark futuristic UI with custom cursor, animated orbs, and grid background
- ⚡ Smooth scroll-triggered animations throughout
- 🔤 Typewriter effect in Hero section
- 📊 Animated skill progress bars and count-up stats
- 🗂 Projects fetched from Node.js REST API
- 📬 Contact form with MongoDB storage
- 📱 Fully responsive for mobile, tablet, and desktop
- ⏳ Loading screen with progress animation

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, CSS Variables, Intersection Observer |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Fonts | Outfit + Space Mono (Google Fonts) |

---

## 📁 Project Structure

```
anurag-portfolio/
├── backend/
│   ├── models/
│   │   └── Contact.js          # MongoDB contact form model
│   ├── routes/
│   │   ├── contact.js          # POST/GET contact messages
│   │   └── projects.js         # GET projects data
│   ├── .env                    # Environment variables
│   ├── package.json
│   └── server.js               # Express server entry
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── Navbar.js
│       │   ├── Hero.js          # Typewriter + social links
│       │   ├── About.js
│       │   ├── Skills.js        # Animated progress bars
│       │   ├── Projects.js      # Fetches from API
│       │   ├── Education.js     # Timeline layout
│       │   ├── Certificates.js
│       │   ├── Achievements.js  # Count-up stats
│       │   ├── Contact.js       # Form → backend
│       │   ├── Footer.js
│       │   ├── Cursor.js        # Custom cursor
│       │   └── Loader.js        # Loading screen
│       ├── hooks/
│       │   └── useInView.js     # Scroll animation hook
│       ├── App.js
│       ├── index.js
│       └── index.css            # Global styles + CSS variables
│
├── package.json                 # Root (runs both servers)
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18 or higher
- **MongoDB** running locally OR a MongoDB Atlas URI

### Step 1 — Clone / Extract
```bash
# Extract the ZIP file, then navigate to the folder
cd anurag-portfolio
```

### Step 2 — Configure Environment
Open `backend/.env` and update:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
```
> 💡 For MongoDB Atlas: replace with your Atlas connection string
> e.g. `mongodb+srv://user:pass@cluster.mongodb.net/portfolio`

### Step 3 — Install Dependencies

**Option A — All at once (from root):**
```bash
npm install          # installs concurrently
npm run install-all  # installs backend + frontend deps
```

**Option B — Manually:**
```bash
# Terminal 1 — Backend
cd backend
npm install

# Terminal 2 — Frontend
cd frontend
npm install
```

### Step 4 — Run the App

**Option A — Both servers together (from root):**
```bash
npm run dev
```

**Option B — Separately:**
```bash
# Terminal 1
cd backend && npm run dev     # runs on http://localhost:5000

# Terminal 2
cd frontend && npm start       # runs on http://localhost:3000
```

### Step 5 — Open in Browser
Navigate to: **http://localhost:3000**

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server health check |
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get single project |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all messages |

---

## 📬 Contact Form
Messages submitted via the form are saved to MongoDB.
To view messages, hit: `GET http://localhost:5000/api/contact`

---

## 🎨 Customization

**Colors** — Edit CSS variables in `frontend/src/index.css`:
```css
:root {
  --accent-primary: #00e5ff;    /* Cyan */
  --accent-secondary: #7c3aed;  /* Purple */
  --accent-tertiary: #10b981;   /* Green */
}
```

**Content** — Update projects in `backend/routes/projects.js`

**Personal Info** — Edit individual component files in `frontend/src/components/`

---

## 🔧 Troubleshooting

| Issue | Fix |
|-------|-----|
| MongoDB connection error | Ensure MongoDB is running: `mongod` |
| Port 5000 in use | Change `PORT` in `backend/.env` |
| Port 3000 in use | React will auto-ask to use 3001 |
| Form shows error | Check backend is running on port 5000 |

---

## 👤 Author

**Anurag Sharma**
- 📧 panditanuragsharma9@gmail.com
- 📱 +91-9410414196
- 🔗 [LinkedIn](https://www.linkedin.com/in/anurag-sharma-02705129b/)
- ⌥ [GitHub](https://github.com/Anurag838486)

---

*Built with ❤️ using React + Node.js + MongoDB*
