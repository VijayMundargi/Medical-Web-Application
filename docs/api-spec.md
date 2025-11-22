# API Specification

---

## 1. Auth APIs

### POST /api/auth/login
### POST /api/auth/register (Admin only)

---

## 2. Medicine APIs

### GET /api/medicines
Description: Search medicines  
Query params:


?search=para :

Response:
```json
[
  {
    "id": 1,
    "name": "Paracetamol 650",
    "mrp": 35.0,
    "stock": 55,
    "rackName": "Rack B",
    "shelfNumber": "Shelf 1",
    "stackName": "Pain & Fever Section"
  }
]

-------------------------------------------------
Creating

POST /api/medicines :
{
  "name": "Paracetamol",
  "batchNo": "B-001",
  "expiryDate": "2026-01-01",
  "mrp": 30,
  "stock": 100,
  "rackName": "Rack A",
  "shelfNumber": "Shelf 2",
  "stackName": "Painkillers"
}


-------------------------------------------------

PUT /api/medicines/{id}/location :

{
  "rackName": "Rack C",
  "shelfNumber": "Shelf 3",
  "stackName": "General Medicines"
}


-------------------------------------------------

3. Order APIs

POST /api/orders

GET /api/orders/{id}

POST /api/orders/{id}/return


--------------------------------------------------

4. Reports APIs

GET /api/reports/sales?from=2025-01-01&to=2025-01-31

GET /api/reports/low-stock

GET /api/reports/stock


---

# ✅ **5. docs/architecture.md (Updated)**

```markdown
# Architecture

## Frontend → Backend → Database Flow

1. React frontend sends HTTP requests via Axios  
2. Spring Boot receives request via controllers  
3. Services handle business logic  
4. Data stored in PostgreSQL/MySQL  
5. Response returned back to frontend

---

## Modules

### Backend
- controller/
- service/
- repository/
- entity/
- dto/
- security/
- config/

### Frontend
- pages/
- components/
- services/ (API calls)
- context/ (AuthContext)
- routes/

---

## Medicine Location Data Flow

1. Manager updates location →  
   `PUT /api/medicines/{id}/location`

2. Saved into DB fields:
   - rackName  
   - shelfNumber  
   - stackName  

3. When searching:
   Frontend displays location instantly.


