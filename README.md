# 🛍️ My E-Commerce Web Application

A full-stack e-commerce web application built with React (Vite), Node.js (Express), and MySQL. This project demonstrates a professional, production-style setup with authentication, protected routes, normalized databases, and an end-to-end checkout workflow.

---

## 🚀 Features

- **User Authentication**: Secure registration and login using JWT tokens and cookies
- **Protected Routes**: Backend verification using middleware for authorized access
- **Contact Us**: Logged-in users can submit issues or queries stored in the database
- **Cart & Checkout**: Add, remove, and review products before confirming purchase
- **Order Management**: Each order saved with normalized schema (Orders & OrderItems tables)
- **Database Integration**: Fully normalized MySQL schema with foreign keys
- **Inline Server Messages**: Success and error messages rendered dynamically (green/red text)
- **Responsive UI**: Works on desktop and mobile using modern React design principles
- **Clean Architecture**: Separated controllers, routes, and models for scalability

---

## 🧠 Tech Stack

- **Frontend**: React (Vite), Axios, Context API, CSS Modules / MUI
- **Backend**: Node.js, Express.js, CORS, JWT, bcrypt
- **Database**: MySQL (with foreign key normalization)
- **Deployment**: Vercel (Frontend) + Render (Backend) + Planetscale / Railway (Database)

---

## ⚙️ Folder Structure

### Frontend (React)

```
frontend/
 ├── src/
 │   ├── components/
 │   ├── pages/
 │   ├── context/
 │   ├── App.jsx
 │   └── main.jsx
 ├── public/
 ├── .env
 └── package.json
```

### Backend (Node + Express)

```
backend/
 ├── controllers/
 │   ├── EcomController.js
 │   └── ProtectedController.js
 ├── models/
 │   ├── PublicModels.js
 │   └── ProtectedModels.js
 ├── routes/
 │   ├── publicRoutes.js
 │   └── protectedRoutes.js
 ├── middleware/
 │   └── verifyToken.js
 ├── server.js
 ├── .env
 └── package.json
```

---

## 🗄️ Database Schema Overview

### Table: users

| Column | Type | Description |
|--------|------|-------------|
| user_id | INT | Primary key |
| username | VARCHAR(35) | Unique username |
| email | VARCHAR(35) | User email |
| password | VARCHAR(255) | Hashed password |
| contactNo | VARCHAR(15) | Contact number |

### Table: userQueries

| Column | Type | Description |
|--------|------|-------------|
| query_id | INT | Primary key (auto starts at 1000) |
| user_id | INT | Foreign key → users.user_id |
| issueType | VARCHAR(35) | Type of issue |
| issueMessage | VARCHAR(1000) | Message content |
| created_at | DATETIME | Timestamp |

### Table: orders

| Column | Type | Description |
|--------|------|-------------|
| order_id | INT | Primary key |
| user_id | INT | Foreign key → users.user_id |
| address | VARCHAR(255) | Delivery address |
| payment_method | VARCHAR(50) | Payment method |
| total_amount | DECIMAL(10,2) | Total price |
| placed_at | TIMESTAMP | Auto timestamp |
| status | ENUM | 'Pending', 'Shipped', 'Delivered', 'Cancelled' |

### Table: order_items

| Column | Type | Description |
|--------|------|-------------|
| item_id | INT | Primary key |
| order_id | INT | Foreign key → orders.order_id |
| product_id | INT | Product reference ID |
| title | VARCHAR(255) | Product title |
| price | DECIMAL(10,2) | Product price |
| quantity | INT | Quantity ordered |
| image | TEXT | Image URL |

---

## 🌐 Deployment Details

### Backend (Render)

1. Push backend code to GitHub
2. Go to Render and click **New Web Service**
3. Link your repo and set build/start commands:

```
Build Command: npm install
Start Command: npm start
```

4. Add environment variables:

```
PORT=5000
DB_HOST=xxxx
DB_USER=xxxx
DB_PASSWORD=xxxx
DB_NAME=xxxx
JWT_SECRET=xxxx
FRONTEND_URL=http://localhost:5173
```

5. Deploy and copy your backend URL

### Frontend (Vercel)

1. Push frontend code to GitHub
2. Go to Vercel → New Project → Import frontend repo
3. Add environment variable:

```
VITE_API_URL=https://your-backend.onrender.com
```

4. Deploy. It'll give you a live domain like: `https://myecommerce-frontend.vercel.app`

---

🧩 Author
👨‍💻 Manan Bagadi
Full Stack Developer | Machine Learning Enthusiast
📧 mananbagadi100@gmail.com
🌐 https://www.linkedin.com/in/manan-bagadi-8599b0225/
 
✅ Status
All core features complete. Project ready for deployment and demonstration for internship or job applications.
