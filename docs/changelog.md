
---

# ✅ **2. docs/requirements.md (Updated with Location Feature)**

```markdown
# Requirements Document

## 1. Functional Requirements

### 1.1 User Roles
#### Admin
- Manage medicines (CRUD)
- Manage staff accounts
- View all reports
- Configure medicine location (rack, shelf, stack)

#### Staff
- Search medicines & customers
- Create orders
- Handle billing & returns
- View their shift report

---

### 1.2 Medicine Management
The system must allow:

- Add new medicine with:
  - Name
  - Batch number
  - Expiry date
  - MRP / Purchase Rate / GST
  - Stock quantity
  - **Location: rack, shelf, stack name/section**
- Update medicine details
- Delete/disable medicine
- Search medicines by name, barcode, category
- Show these fields during search results:
  - Stock
  - MRP
  - Expiry
  - **Rack**
  - **Shelf**
  - **Stack/Section**

---

### 1.3 Customer Management
- Register customer
- Search customer by name/phone
- View past purchases
- Edit profile

---

### 1.4 Orders & Billing
- Create new order
- Add medicines with quantity
- Auto-calc:
  - Amount
  - GST
  - Discounts
- Print or download invoice
- Return orders with reason
- Adjust stock when returning

---

### 1.5 Medicine Location Tracking (NEW FEATURE)
- Each medicine must be mapped to:
  - `rackName`
  - `shelfNumber`
  - `stackName`
- Manager/Admin can update locations
- When searching for a medicine:
  - System must display exact location immediately
- Must appear in:
  - Medicine search list
  - Order creation page
  - Stock reports

---

### 1.6 Reports
- Daily Sales Report
- Cashier Shift Report
- Stock Report
- Low Stock Report

---

## 2. Non-Functional Requirements
- JWT security
- API validation
- Cloud deployment ready
- Responsive layout
- Optimized searching
