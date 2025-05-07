#Exercise 1
print( "hello world /" * 4)
#Exercise 2
result = (99 ** 3) * 8
print(result)
#Exercise 3

user_name = input("Hey there! What's your name? ").strip()

my_name = "Grok"

if user_name.lower() == my_name.lower():
    print(f"No way, {user_name}! You’re named Grok too? Are you secretly an AI built by xAI, or just stealing my cosmic vibes?")
else:
    print(f"Nice to meet you, {user_name}! Sadly, you’re not a Grok like me. I was hoping for a name-twin to plot world domination... or at least share some binary jokes!")

#Exercise 4
height = float(input("Please enter your height in centimeters: "))

if height > 145:
    print("Woohoo! You're tall enough to ride!")
else:
    print("Sorry, you need to grow some more to ride.")
    #Exercise 5
my_fav_numbers = {3, 7, 12, 19}

my_fav_numbers.add(25)
my_fav_numbers.add(30)

my_fav_numbers.remove(max(my_fav_numbers))

friend_fav_numbers = {4, 8, 15, 23}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("My favorite numbers:", my_fav_numbers)
print("Friend's favorite numbers:", friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)
    #Exercise 6
my_tuple = (1, 2, 3)
new_tuple = my_tuple + (4, 5)
print(new_tuple) 

my_list = list(my_tuple)
my_list.append(4)
my_list.append(5)
modified_tuple = tuple(my_list)
print(modified_tuple) 
    #Exercise 7
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
apple_count = basket.count("Apples")
print("Number of Apples in the basket:", apple_count)
basket.clear()
print(basket)
 #Exercise 8
sandwich_orders = [
    "Tuna sandwich",
    "Pastrami sandwich",
    "Avocado sandwich",
    "Pastrami sandwich",
    "Egg sandwich",
    "Chicken sandwich",
    "Pastrami sandwich"
]
print("The deli has run out of pastrami. Removing all Pastrami sandwiches from orders...\n")
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)  
    finished_sandwiches.append(current_sandwich)  
    print(f"I made your {current_sandwich.lower()}")  

print("\nAll sandwiches made today:")
for sandwich in finished_sandwiches:
    print(f"- {sandwich}")
    