# System Architecture — Medical Store Web Application

This document explains the complete architecture of the Medical Store Web Application, including system components, data flow, backend layers, frontend structure, and deployment architecture.

---

# 🏗 1. High-Level Architecture Overview

The system is built using a **Full-Stack MVC + REST architecture**, consisting of:

- **Frontend:** React JS (SPA)
- **Backend:** Spring Boot (REST APIs)
- **Database:** MySQL / PostgreSQL
- **Cloud Deployment:** Vercel/Netlify + Render/Railway

---

# 🔄 2. Frontend → Backend → Database Flow

This describes how a request flows through the system.

### **1. React frontend sends HTTP requests via Axios**
Example:
```js
axios.get("/api/medicines?search=paracetamol");

2. Spring Boot receives request via controllers

Controller endpoint:
    @GetMapping("/api/medicines")


3. Services handle business logic

    Search logic

    Stock update

    Location update

    Order calculations


4. Repository interacts with Database

Spring Data JPA queries the DB:
    SELECT * FROM medicines WHERE name LIKE 'para'

5. Database stores and returns data

Data is persisted in:

    MEDICINES

    CUSTOMERS

    ORDERS

    ORDER_ITEMS

6. Service prepares a response

    Converted to DTO → avoids exposing database fields directly.

7. Controller sends JSON response to frontend

{
  "id": 1,
  "name": "Paracetamol",
  "stock": 120,
  "rackName": "Rack A",
  "shelfNumber": "Shelf 2",
  "stackName": "Pain Section"
}

8. Frontend displays data instantly

Example:

 Location
    Rack: Rack A
    Shelf: Shelf 2
    Stack: Pain Section

3. Backend Architecture (Spring Boot)

backend/
 ┣ entity/          -> Database models (tables)
 ┣ repository/      -> DB queries (JPA)
 ┣ service/         -> Business logic
 ┣ controller/      -> API endpoints
 ┣ dto/             -> Request/Response objects
 ┣ security/        -> JWT authentication
 ┣ config/          -> CORS, global configs
 ┣ exception/       -> Exception handling


3.1 Entities (Models)

Entities represent database tables.

Examples:

    Medicine

    Customer

    Order

    OrderItem

    User

    Role

3.2 Repositories (Data Access Layer)
Uses Spring Data JPA
    interface MedicineRepository extends JpaRepository<Medicine, Long> { }


3.3 Services (Business Logic Layer)

Handles:

    Inventory update

    Calculate bill

    Medicine search

    Validations

    Updating medicine location

    Handling order returns

3.4 Controllers (API Layer)

Expose REST APIs for frontend.

Example:

    @GetMapping("/api/medicines")


3.5 DTO Layer

Used for:

    Clean API responses

    Avoid exposing entity structure

Example:

    MedicineRequestDto

    MedicineResponseDto

    MedicineLocationUpdateDto


🔹 3.6 Security Layer

Handles:

    JWT token generation

    Role-based access

    Authentication

    

4. Frontend Architecture (React)
    frontend/
 ┣ pages/          -> Full pages (MedicineSearchPage, OrderPage)
 ┣ components/     -> Reusable components (tables, cards)
 ┣ services/       -> API calls with Axios
 ┣ context/        -> Auth + Global State
 ┣ routes/         -> Route definitions
 ┣ utils/          -> Helper functions


4.1 Pages

Screens that match routes:

    /medicines

    /orders/new

    /customers

    /reports

    /login


🔹 4.2 Components

    Reusable UI blocks:

    SearchBar

    MedicineTable

    LocationCard

    InvoiceCard

4.3 Context (Global State)

Examples:

    AuthContext (user, token)

    CartContext (order items)


5. Database Architecture
Tables:

    MEDICINES

    CUSTOMERS

    ORDERS

    ORDER_ITEMS

    USERS

    ROLES


6. Deployment Architecture (Cloud-Based)
    
Frontend Deployment

    Vercel / Netlify

    Build: npm run build

    Served as static files
    
Backend Deployment

    Render / Railway / AWS

    Runs packaged JAR -> .jar file is what you upload/deploy to cloud <b>(And your backend becomes live.)</b>

    Environment variables for DB and JWT

Database

    Cloud MySQL/PostgreSQL instance

    Automatic backups

Frontend ↔ Backend

    CORS enabled

    API URL configured in .env


7. End-to-End Request Lifecycle (Example)
Scenario: Manager searches "Dolo 650"

React search input triggers searchMedicines("Dolo")

Axios sends GET /api/medicines?search=Dolo

Controller → Service

Service → Repository (SQL search)

    DB returns matching medicines

    Service converts Entity → DTO

    Controller returns JSON

    React displays table + location card instantly

    Manager checks rack/shelf/stack and picks the medicine