-- Exersise1
-- All items, ordered by price (lowest to highest).
SELECT MIN( price) FROM items ;
SELECT MAX (price) FROM items ;
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT MAX( 80 ) FROM items ;
SELECT MIN(80) FROM items ;
-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3;
-- All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name
FROM customers
ORDER BY last_name DESC;

-- Exersise2
-- In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT * FROM customer;

-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT first_name || ' ' || last_name AS full_name

-- Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
FROM customer;

-- SELECT DISTINCT create_date
FROM customer;

-- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
SELECT * 
FROM customer
ORDER BY first_name DESC;

-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
SELECT cdfilm_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
SELECT address, phone
FROM address
WHERE district = 'Texas';

-- Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT * 
FROM film
WHERE film_id IN (15, 150);

-- Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Eric Robert';

-- No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'Er%';

-- Write a query which will find the 10 cheapest movies.
SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC
OFFSET 10 FETCH FIRST 10 ROWS ONLY;
-- Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
SELECT 
    c.customer_id,
    c.first_name, 
    c.last_name, 
    p.amount, 
    p.payment_date
FROM 
    customer c
INNER JOIN 
    payment p ON c.customer_id = p.customer_id
ORDER BY 
    c.customer_id ASC;
-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
SELECT 
    f.film_id,
    f.title
FROM 
    film f
WHERE 
    f.film_id NOT IN (SELECT i.film_id FROM inventory i);

-- Write a query to find which city is in which country.
SELECT 
    c.city_name AS City, 
    co.country_name AS Country
FROM 
    cities c
JOIN 
    countries co ON c.country_id = co.country_id;