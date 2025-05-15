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

INSERT INTO customer_review (film_id, language_id, title, score, review_text) 
VALUES 
    (1, 1, 'Mind-Blowing Experience', 10, 'One of the best sci-fi movies ever made.'),
    (2, 2, 'Masterpiece of Space Exploration', 9, 'A stunning visual journey through the universe.');
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE id = 1;
-- Exersice 2

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