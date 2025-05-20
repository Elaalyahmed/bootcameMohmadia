import psycopg2
class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    @staticmethod
    def connect():  
      return psycopg2.connect(
        dbname='restaurant_db',    
        user='postgres',        
        password='admin',      
        host='localhost',
        port='5432'
    )
    conn = connect()
    cur = conn.cursor()
    create_script = """
    CREATE TABLE IF NOT EXISTS Menu_Items (
        item_id SERIAL PRIMARY KEY,
        item_name VARCHAR(30) NOT NULL,
        item_price SMALLINT DEFAULT 0
    );
    """
    cur.execute(create_script)
    conn.commit()

    def save(self):
        """Saves the item to the database."""
        conn = self.connect()
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO Menu_Items (item_name, item_price) 
            VALUES (%s, %s)
        """, (self.name, self.price))
        conn.commit()
        cursor.close()
        conn.close()
        print(f"Item '{self.name}' added to the menu.")

    def delete(self):
        """Deletes the item from the database."""
        conn = self.connect()
        cursor = conn.cursor()
        cursor.execute("""
            DELETE FROM Menu_Items 
            WHERE item_name = %s
        """, (self.name,))
        conn.commit()
        cursor.close()
        conn.close()
        print(f"Item '{self.name}' deleted from the menu.")

    def update(self, new_name, new_price):
        """Updates the item's name and price in the database."""
        conn = self.connect()
        cursor = conn.cursor()
        cursor.execute("""
            UPDATE Menu_Items 
            SET item_name = %s, item_price = %s
            WHERE item_name = %s
        """, (new_name, new_price, self.name))
        conn.commit()
        cursor.close()
        conn.close()
        print(f"Item '{self.name}' updated to '{new_name}' with price {new_price}.")

def connect():
    return psycopg2.connect(
        dbname='restaurant_db',
        user='postgres',
        password='admin',
        host='localhost',
        port='5432'
    )

# def display_menu():
#     """Displays all items from the restaurant menu before exiting."""
#     try:
#         conn = connect()
#         cur = conn.cursor()
#         cur.execute("SELECT * FROM Menu_Items")
#         items = cur.fetchall()
        
#         print("Restaurant Menu:")
#         print("////")
#         for item in items:
#             print(f"ID: {item[0]} | Name: {item[1]} | Price: {item[2]} $")
        
#         print("/////")
    
#     except Exception as e:
#         print(" Error displaying menu:", e)
    
#     finally:
#         cur.close()
#         conn.close()
# display_menu()
# print(" Exiting the program... Goodbye!")
# exit()

