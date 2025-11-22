# Database Schema

## MEDICINES
| Field         | Type        | Description |
|---------------|-------------|-------------|
| id            | BIGINT (PK) | Unique ID |
| name          | VARCHAR     | Medicine name |
| batch_no      | VARCHAR     | Batch number |
| expiry_date   | DATE        | Expiry |
| mrp           | DOUBLE      | MRP |
| stock         | INT         | Quantity |
| gst_percent   | DOUBLE      | Tax |
| rack_name     | VARCHAR     | **Rack name where medicine is stored** |
| shelf_number  | VARCHAR     | **Shelf number** |
| stack_name    | VARCHAR     | **Stack / Section name** |
| is_active     | BOOLEAN     | Active/disabled |

---

## CUSTOMERS
(id, name, phone, email, address)

## ORDERS
(id, customer_id, order_date, total_amount, payment_status)

## ORDER_ITEMS
(id, order_id, medicine_id, quantity, price)

## USERS
(id, username, password, role)
