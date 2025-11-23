# 🏥 Medical Store Management System

A full-stack web application to manage day-to-day operations of a medical / pharmacy store:

- Medicine inventory
- Billing & orders
- Customer history
- Order reports & cashier reports

Currently:

- ✅ Frontend (React + Vite) – **Phase 1 complete**
- 🐳 MySQL in Docker – **running and ready**
- 🧩 Backend (Spring Boot) – **in development (Phase 2)**

---

## 🚀 Features

### Frontend (React)

- 🔐 Login page (Admin / Staff UI ready – backend auth to be wired)
- 🧾 Billing / Sales page
  - Add products to cart
  - Select payment mode (Cash / UPI / Bank Transfer)
  - Generate printable invoice
  - Automatically updates:
    - Customer purchase history
    - Orders context (for Order History)
- 👥 Customer Management
  - Customer lookup with search
  - View customer details & purchase history
  - Auto-create customer when billing with new phone number
- 📦 Product & Inventory Management
  - Create product with:
    - Name, category, HSN, price, GST, total price (auto)
    - Stock quantity
    - Rack number, shelf number, storage type/location
    - Barcode, batch number, manufacturer name
    - Medicine type (tablet / syrup / injection / etc.)
    - Expiry date + visual status (expired / expiring soon / valid)
  - Product catalog page (Amazon/Flipkart style grid) with:
    - Search bar
    - Category filter
    - All details on card (price, stock, expiry, rack & shelf)
  - Product management page (edit / delete)
- 📊 Order History
  - List of completed orders
  - Search by order ID or customer
  - Status badges (Completed / Pending / Returned)
  - Print & download invoice as PDF (jsPDF + autoTable)
  - Return button to mark orders as Returned
- 📈 Dashboard (UI)
  - Stats cards
  - Charts (mock / random data for now)
  - Ready to connect with backend metrics
- 🧭 Sidebar & Layout
  - Role-aware sidebar (Admin / Staff)
  - Navigation to Dashboard, Billing, Products, Customer Lookup, Order History, Cashier Report, Inventory, Settings

---

## 🧱 Tech Stack

### Frontend
- React + Vite
- React Router
- Context API
- Tailwind CSS
- shadcn/ui
- lucide-react (icons)
- jsPDF + jspdf-autotable (PDF invoice)

### Backend (Planned / WIP)
- Java 17+
- Spring Boot
- Spring Web (REST)
- Spring Data JPA
- Spring Security + JWT
- MySQL (in Docker)
- Maven

### DevOps / Infra
- Docker (MySQL container)
- Environment-based configuration for DB & security keys (in future)

---

## 🐳 MySQL in Docker

MySQL runs in a Docker container named `medical_store_mysql`.

Example `docker-compose.yml` (simplified):

```yml
services:
  mysql:
    image: mysql:8.0
    container_name: medical_store_mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: medical_store
      MYSQL_USER: admin
      MYSQL_PASSWORD: admin123
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
