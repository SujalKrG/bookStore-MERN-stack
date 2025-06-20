
# 📚 BookStore MERN App

A full-stack BookStore application built using the **MERN** stack (MongoDB, Express, React, Node.js).  
Includes full **CRUD functionality**, clean UI, **Notistack-based alert system**, and is deployed on **Vercel** (frontend) and **Render** (backend).

---

## 🚀 Live Demo

Frontend: [book-store-mern-stack-xi.vercel.app](https://book-store-mern-stack-xi.vercel.app)  
Backend: [bookstore-mern-stack-2oyq.onrender.com](https://bookstore-mern-stack-2oyq.onrender.com)

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Axios, Notistack, Tailwind CSS  
- **Backend**: Express.js, MongoDB, Mongoose  
- **Deployment**: Vercel (frontend) + Render (backend)  
- **Other**: dotenv, CORS, GitHub Actions (planned)

---

## 📦 Features

- ✅ Create, Read, Update, and Delete books  
- ✅ Responsive UI  
- ✅ Loading spinners and alert notifications with Notistack  
- ✅ .env integration for secure config  
- ✅ Clean code structure using routes, models, controllers (WIP)  
- ✅ Fully deployed, with CI/CD planned

---

## 🧪 Getting Started (Local Development)

### 1. Clone the repo
```bash
git clone https://github.com/SujalKrG/bookStore-MERN-stack
```

### 2. Install dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd ../frontend
npm install
```

### 3. Set up environment variables

In `backend/.env`, add:
```
PORT=5555
MONGO_URL=your-mongodb-uri
```

### 4. Run the servers

**Backend:**
```bash
npm run dev
```

**Frontend:**
```bash
npm run dev
```

---

## 📂 Folder Structure

```
bookStore-MERN-stack/
│
├── frontend/       → React + Notistack UI
├── backend/        → Express API & MongoDB config
└── README.md
```

---

## 🤝 Contributions

Pull requests are welcome!  
If you find a bug or want to improve something, feel free to open an issue or PR. Let’s build better together 💪

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

- Huge thanks to the open-source community
- Learned a lot while debugging CORS and deploying full-stack apps  
- More updates & polish coming soon!
