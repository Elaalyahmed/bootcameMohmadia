-- Exersise 1
  --  Get a list of all languages
SELECT * FROM language;

--  Get a list of all films joined with their languages
SELECT 
    film.title AS Film_Title,
    film.description AS Description,
    language.name AS Language_Name
FROM 
    film
JOIN 
    language ON film.language_id = language.language_id;

--  Get all languages, even if there are no films in those languages
SELECT 
    film.title AS Film_Title,
    film.description AS Description,
    language.name AS Language_Name
FROM 
    language
LEFT JOIN 
    film ON film.language_id = language.language_id;

-- --  Create a new table called new_film
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

--  Insert some sample films
INSERT INTO new_film (name) VALUES ('Inception'), ('Interstellar'), ('The Matrix');
SELECT * FROM new_film ;

--  Create a new table called customer_review
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT,
    language_id INT,
    title VARCHAR(255) NOT NULL,
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES language(language_id)
);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

SELECT * FROM languageSELECT * FROM languageSELECT * FROM languageINSERT INTO customer_review (film_id, language_id, title, score, review_text) 
VALUES 
    (1, 1, 'Mind-Blowing Experience', 10, 'One of the best sci-fi movies ever made.'),
    (2, 2, 'Masterpiece of Space Exploration', 9, 'A stunning visual journey through the universe.');
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE id = 1;
-- Exersice 2

-- Use UPDATE to change the language of some films. Make sure that you use valid languages.

UPDATE film
SET language_id = 1
WHERE language_id = 2;
-- check
SELECT * FROM language;

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
    -- . We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;

-- Find out how many rentals are still outstanding (i.e., have not been returned to the store yet).
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;
-- Find the 30 most expensive movies which are outstanding (i.e., have not been returned yet).
SELECT f.film_id, f.title, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
GROUP BY f.film_id, f.title, f.replacement_cost
ORDER BY f.replacement_cost DESC
LIMIT 30;
-- Your friend wants to rent 4 movies. Help find them based on these clues:
-- .1. The 1st film: about a sumo wrestler, one of the actors is Penelope Monroe.
SELECT f.film_id, f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE (f.description LIKE '%sumo wrestler%' OR f.title LIKE '%sumo wrestler%')
AND a.first_name = 'Penelope' AND a.last_name = 'Monroe';
-- .2. The 2nd film: A short documentary (less than 1 hour long), rated “R”.
SELECT film_id, title
FROM film
WHERE length < 60
AND rating = 'R'
AND category_id = (SELECT category_id FROM category WHERE name = 'Documentary');

SELECT f.film_id, f.title
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE f.length < 60
AND f.rating = 'R'
AND c.name = 'Documentary';
-- 3. The 3rd film: Rented by Matthew Mahan, paid over $4.00, returned between 28th July and 1st August 2005.
SELECT f.film_id, f.title
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND p.amount > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- 4. The 4th film: Also watched by Matthew Mahan, has the word "boat" in the title or description, and was expensive to replace.
SELECT f.film_id, f.title, f.replacement_cost
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND (f.title LIKE '%boat%' OR f.description LIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;
