-- Step 1: Create the Customer table
CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL
);
SELECT * FROM customer
-- Step 2: Create the CustomerProfile table with a One-to-One relationship
CREATE TABLE CustomerProfile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INT UNIQUE,
    FOREIGN KEY (customer_id) REFERENCES Customer(id) ON DELETE CASCADE
);

-- Step 3: Insert data into Customer table
INSERT INTO customer (first_name, last_name) VALUES 
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- Step 4: Insert profiles for each customer (One-to-One mapping) using subqueries
INSERT INTO CustomerProfile (isLoggedIn, customer_id) VALUES
(TRUE, (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')),
(FALSE, (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu')),
(FALSE, (SELECT id FROM Customer WHERE first_name = 'Lea' AND last_name = 'Rive'));

-- Step 5: Query the first_name of logged-in customers
SELECT first_name FROM Customer
JOIN CustomerProfile ON Customer.id = CustomerProfile.customer_id
WHERE isLoggedIn = TRUE;

-- Step 6: Query all customers with their login status
SELECT c.first_name, cp.isLoggedIn FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id;

-- Step 7: Query the number of customers not logged in
SELECT COUNT(*) AS NotLoggedInCount FROM CustomerProfile WHERE isLoggedIn = FALSE;

-- Part II: Create Book table
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(50) NOT NULL
);

-- Insert books
INSERT INTO Book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To Kill a Mockingbird', 'Harper Lee');

-- Create Student table
CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);

-- Insert students
INSERT INTO Student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- Create Library table (junction for many-to-many relationship)
CREATE TABLE Library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insert data into Library (junction table)
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) VALUES
((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'John'), '2022-02-15'),
((SELECT book_id FROM Book WHERE title = 'To Kill a Mockingbird'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),
((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
((SELECT book_id FROM Book WHERE title = 'Harry Potter'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12');

-- Display all columns from the junction table
SELECT * FROM Library;

-- Display the name of students and titles of borrowed books
SELECT s.name, b.title FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- Display the average age of children who borrowed 'Alice In Wonderland'
SELECT AVG(age) AS AverageAge FROM Student
JOIN Library ON Student.student_id = Library.student_fk_id
JOIN Book ON Library.book_fk_id = Book.book_id
WHERE title = 'Alice In Wonderland';

-- Test cascade delete
DELETE FROM Student WHERE name = 'John';

-- Check the Library table after deletion
SELECT * FROM Library;
