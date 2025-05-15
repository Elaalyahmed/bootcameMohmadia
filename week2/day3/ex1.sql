-- Exersice
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.

UPDATE new_film 
SET language_id = 1 
WHERE id = 1;

UPDATE new_film 
SET language_id = 2 
WHERE id = 2;

UPDATE new_film 
SET language_id = 3
WHERE id = 3;
-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?


	SELECT 
    customer.customer_id AS CustomerID,
    customer.first_name AS FirstName,
    customer.last_name AS LastName,
    address.address AS Address,
    address.district AS District,
    store.manager_staff_id AS Store_name,
    customer.last_update AS LastUpdate
FROM 
    customer
JOIN 
    address ON customer.address_id = address.address_id
LEFT JOIN 
    store ON customer.store_id = store.store_id;







