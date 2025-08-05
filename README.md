# ✅ Full Stack Todo App

A full-featured Todo application built with **React.js (Frontend)** and **Node.js + Express + MySQL (Backend)**. This project allows users to register, log in, and manage their personal todo list with a modern and clean UI.

---

## 📁 Project Structure
```tree 

Todo/
├── backend/ # Node.js + Express + MySQL API
├── frontend/ # React.js + Tailwind CSS + Redux Toolkit + React Query
└── README.md # This file
```

---


## 🚀 Features

### ✅ Backend
- User authentication (JWT-based)
- CRUD operations for todos
- MySQL database integration

### 🎨 Frontend
- Clean UI with Tailwind CSS and ShadCN UI components
- Global state management using Redux Toolkit
- Data fetching and caching with React Query
- Axios for handling HTTP requests
- Token-based authentication
- Responsive and user-friendly interface

---

## 🧰 Tech Stack

### 🔙 Backend
- Node.js
- Express.js
- MySQL
- JWT (Authentication)

### 🔜 Frontend
- React.js
- Tailwind CSS
- Redux Toolkit
- React Query
- Axios
- ShadCN UI

---

## ⚙️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/meshcode21/Todo.git
cd Todo
```

## 📦 Backend Setup (```/backend```)
### 1. Navigate to the Backend Folder
```bash
cd backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up MySQL Database

Make sure MySQL is installed and running on your system.
- Create a database named ``` todos ```
- Run the following SQL statements to create the required tables:

```sql
-- Create `users` table
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT current_timestamp()
);

-- Create `todos` table
DROP TABLE IF EXISTS `todos`;
CREATE TABLE IF NOT EXISTS `todos` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY kEY,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `created_time` timestamp NOT NULL DEFAULT current_timestamp(),
  KEY `fk_user_id` (`user_id`)
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
);
```

### 4. Configure Environment Variables
Create a .env file inside the ```backend/``` folder:

```env
PORT=4000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=todos
JWT_SECRET=iloveyou
```
Adjust values based on your local setup.

### 5. Run the Backend Server
```bash
npm run dev
```

The server should now be running on:
```arduino
http://localhost:4000
```

## 🧑‍🎨 Frontend Setup (```/frontend```)

### 1. Navigate to the Frontend Folder
```bash
cd ../frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Frontend App
```bash
npm run dev
```
Frontend runs at: ```http://localhost:5173``` (default Vite port)


## 🧪 Testing the App
- Use Postman or Insomnia to test backend APIs

- Open the frontend in your browser and interact with the UI

- Register, log in, add, update, or delete todos


## 📬 API Endpoints (Backend)

### 🔐 Auth
- ```POST /api/register``` — Register new user

- ```POST /api/login``` — Login user and return JWT

### 📝 Todos
- ```GET /api/todos``` — Get all todos for logged-in user

- ```POST /api/todos``` — Add a new todo

- ```PATCH /api/todos/?id=``` — Update a todo

- ```DELETE /api/todos/?id=``` — Delete a todo

---

### 🧑‍💻 Author
- Mahesh Udas

- GitHub: meshcode21