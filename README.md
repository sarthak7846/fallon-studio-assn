# Feedback App — Vite + React + TypeScript & Node.js + Express + MongoDB

A modern full-stack application with a frontend built using **Vite**, **React**, and **TypeScript**, and a backend powered by **Node.js**, **Express**, and **MongoDB** (via Mongoose).



## 🚀 Live Demo

- **Frontend**: [https://fascinating-puffpuff-862bc2.netlify.app/](https://fascinating-puffpuff-862bc2.netlify.app/)
- **Backend API**: [https://fallon-studio-assn.onrender.com](https://fallon-studio-assn.onrender.com)



## 🛠 Tech Stack

### Frontend (`/fe`)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Backend (`/be`)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) (via [Mongoose](https://mongoosejs.com/))



## 📁 Folder Structure
### /fe → Frontend code (Vite + React + TS) 
### /be → Backend code (Node.js + Express + Mongoose)


## 🧑‍💻 Getting Started

### Clone the Repository

```bash
git clone https://github.com/sarthak7846/fallon-studio-assn.git
cd fallon-studio-assn
```

### Run Frontend
```bash
cd fe
npm install
npm run dev
```
### Run Backend
```bash
cd be
npm install
npm run dev
```
> **Note:** Both the frontend and backend are configured to run locally with `npm run dev`.


## 📦 Deployment
### Frontend — Netlify
- Hosted on Netlify
- Deployment config via netlify.toml:

```toml
[build]
  base = "fe"
  command = "npm run build"
  publish = "dist"
```
### Backend — Render
- Hosted on Render
- Start command: ```npm start```

## 🔗 Useful Links
- Frontend Live URL: https://fascinating-puffpuff-862bc2.netlify.app/
- Backend Server URL: https://fallon-studio-assn.onrender.com

## 🤝 Contributing
Contributions are welcome! If you find a bug or want to add a new feature, feel free to open an issue or pull request.

## 📄 License
This project is open source and available under the MIT License.

Let me know if you'd like to include environment variable setup or API route documentation too!
