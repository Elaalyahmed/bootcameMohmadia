import psycopg2
from menu_item import MenuItem  
class MenuManager:
    _items = [
        MenuItem("Pizza", 12),
        MenuItem("Burger", 8),
        MenuItem("Salad", 7)
    ]
    @staticmethod
    def connect():
        """Establish a connection to the PostgreSQL database."""
        return psycopg2.connect(
            dbname='restaurant_db',
            user='postgres',  
            password='admin', 
            host='localhost',
            port='5432'
        )
    @classmethod
    def get_by_name(cls, name):
        """Retrieve a single item from the Menu_Items table by name, return None if not found."""
        conn = cls.connect()
        cursor = conn.cursor()
        cursor.execute("""
            SELECT item_name, item_price FROM Menu_Items 
            WHERE item_name = %s
        """, (name,))
        result = cursor.fetchone()
        cursor.close()
        conn.close()
        if result:
            return MenuItem(result[0], result[1])
        return None

    @classmethod
    def all_items(cls):
        """Retrieve a list of all items from the Menu_Items table."""
        conn = cls.connect()
        cursor = conn.cursor()
        cursor.execute("""
            SELECT item_name, item_price FROM Menu_Items
        """)
        results = cursor.fetchall()
        cursor.close()
        conn.close()
        return [MenuItem(item[0], item[1]) for item in results]

    @classmethod
    def check_user_credentials(cls, email, password):
      conn = cls.connect()
      cursor = conn.cursor()
      cursor.execute("""
        SELECT id, name, email, role FROM users
        WHERE email = %s AND password = %s
         """, (email, password))
      result = cursor.fetchone()
      cursor.close()
      conn.close()
      if result:
       return {'id': result[0], 'name': result[1], 'email': result[2], 'role': result[3]}
       return None
       

