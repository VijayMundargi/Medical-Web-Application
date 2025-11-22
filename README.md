# Medical Store Web Application

A full-stack, cloud-based medical store management system built with **React** (frontend) and **Spring Boot** (backend).  
Designed for efficient inventory tracking, order handling, billing, and reporting.

---

## ✨ Core Features

### 🔹 Inventory & Medicine Management
- Add, update, delete medicines
- Track stock levels
- **Location tracking: rack, shelf, and stack/section**
- Expiry tracking

### 🔹 Customer Management
- Register customers
- View profile & purchase history
- Fast search by name/phone

### 🔹 Order & Billing
- Create orders
- Add multiple medicines
- Auto tax & total calculation
- Print / download invoice
- Order returns with reason

### 🔹 Reports
- Daily/weekly/monthly sales report
- Cashier shift report
- Low stock report
- Order history report

### 🔹 Authentication & Roles
- Admin: manage medicines, inventory, reports, staff
- Staff: handle sales, customers, orders

---

##  Tech Stack
- Frontend: React, React Router, Axios
- Backend: Spring Boot, Spring Security, JPA, MySQL/PostgreSQL
- Cloud: Render/Railway (backend), Netlify/Vercel (frontend)

---

## 🔹 Getting Started

### 🔹 Backend
```bash
cd backend
mvn spring-boot:run
