from menu_item import MenuItem
from week2.day4.exersice1.menu_manager import MenuManager

def show_user_menu():
    """Display the program menu and get the user's choice."""
    while True:
        print("\nProgram Menu:")
        print("(V) View an Item")
        print("(A) Add an Item")
        print("(D) Delete an Item")
        print("(U) Update an Item")
        print("(S) Show the Menu")
        print("(Q) Quit")
        
        choice = input("Enter your choice: ").strip().upper()
        if choice in ['V', 'A', 'D', 'U', 'S', 'Q']:
            return choice
        else:
            print("Invalid choice. Please select a valid option.")

def add_item_to_menu():
    """Add a new item to the menu by creating a MenuItem and saving it."""
    name = input("Enter the item name: ").strip()
    price = float(input("Enter the item price: ").strip())
    
    item = MenuItem(name, price)
    item.save()
    print(f"'{name}' was added successfully.")

def remove_item_from_menu():
    """Remove an item from the menu by creating a MenuItem and deleting it."""
    name = input("Enter the item name to remove: ").strip()
    
    item = MenuItem(name, 0) 
    item.delete()
    print(f"'{name}' was removed successfully.")

def update_item_in_menu():
    """Update an item in the menu by creating a MenuItem and updating it."""
    name = input("Enter the item name to update: ").strip()
    new_name = input("Enter the new item name: ").strip()
    new_price = float(input("Enter the new item price: ").strip())
    
    item = MenuItem(name, 0) 
    item.update(new_name, new_price)

def view_item():
    """View a single item by name using MenuManager."""
    name = input("Enter the item name to view: ").strip()
    
    item = MenuManager.get_by_name(name)
    if item:
        print(f"Item: {item.name}, Price: {item.price}")
    else:
        print(f"Item '{name}' not found.")

def show_restaurant_menu():
    """Show all items in the menu using MenuManager."""
    items = MenuManager.all_items()
    if items:
        print("\nRestaurant Menu:")
        for item in items:
            print(f"Item: {item.name}, Price: {item.price}")
    else:
        print("The menu is empty.")

def main():
    """Main function to run the menu editor program."""
    while True:
        choice = show_user_menu()
        
        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_in_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'Q':
            print("Exiting the program.")
            break

if __name__ == "__main__":
    main()
def update_item_from_menu():
    try:
        old_name = input("Enter the current name of the item: ")
        old_price = int(input("Enter the current price of the item: "))

        new_name = input("Enter the new name of the item: ")
        new_price = int(input("Enter the new price of the item: "))

        item = MenuItem(old_name, old_price)

        item.update(new_name, new_price)

        print(" The item was updated successfully.")
    
    except Exception as kf:
        print(" There was an error updating the item:", str(kf))

update_item_from_menu()


        
    
