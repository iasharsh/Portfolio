# Harsh Pandey — Portfolio 🌐

Personal portfolio website showcasing my projects, skills, and resume, built as a full-stack React + Express application.

**Live Demo:** https://portfolio-zeta-eight-tvv9yo50on.vercel.app/

## Features

- 🎬 **Animated Hero Section** — rotating role titles using `react-simple-typewriter`
- 💼 **Projects Showcase** — filterable project listing (`ProjectsPage`) with individual project cards
- 🧠 **Skills Section** — dedicated page listing technical skills (`AllSkillsPage`)
- 📩 **Contact Form** — backend-connected contact form (Express + Axios + CORS)
- 📄 **Resume Download** — downloadable PDF resume
- 🔔 **Toast Notifications** — feedback via `react-toastify`
- 🎨 **Responsive Design**

## Tech Stack

**Frontend**
- React 19 + Vite
- React Simple Typewriter (animated hero text)
- React Toastify

**Backend**
- Node.js + Express
- MongoDB (via Mongoose)
- CORS + Axios for client-server communication

## Project Structure

```
client/
├── src/
│   ├── components/    # Hero, About, Skills, Projects, Contact, Navbar, Loader
│   ├── pages/          # ProjectsPage, AllSkillsPage
│   ├── data/            # projects.js — project metadata (title, tags, links, images)
│   ├── assets/
│   └── App.jsx
└── public/
    └── resume PDFs, favicon
```

## Getting Started

```bash
git clone https://github.com/iasharsh/Portfolio.git
cd Portfolio/client
npm install
npm run dev
```

*(If running the backend locally, set up a `.env` with your MongoDB connection string and run the server from the project root.)*

## Featured Projects Linked From This Site

- **SkyMart** — e-commerce app with Context API, cart/wishlist, and a 3D product viewer
- **Taskify** — drag-and-drop Kanban task board built with `dnd-kit`

## Possible Improvements

- Add a blog/writing section
- Add unit tests for the contact form submission flow
