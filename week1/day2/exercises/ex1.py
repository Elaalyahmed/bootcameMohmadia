

   #exersice1
keys = [ 'Ten', 'Twenty' , 'Therty']
valus = [ 10 , 20 , 30]
contin = dict(zip(keys,valus))
print(contin)
#exersice2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total = 0 
for name, age in family.items():
    if age < 3: 
        price = 0 
    elif 3 <= age <= 12:  
        price = 10  
    else:  
        price = 15  

print(f"Total cost for the family: ${total}")  
#exersice 3
brand = {
    "name": "Zara",
    "type_of_clothes": ["men", "women", "children", "home"],
    "number_stores": 7000,
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": "pink"
    },
    "creation_date": 1975,
    "headquarters": "Arteixo, Spain"
}
brand["number_stores"] = 2
print(f"Zara's clients include: {', '.join(brand['type_of_clothes'])}.")
brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print("Last international competitor:", brand["international_competitors"][-1])
print("Major clothes color in the US:", brand["major_color"]["US"])
print("Number of key-value pairs in brand:", len(brand))
print("Keys of brand dictionary:", list(brand.keys()))
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)
print("Updated number of stores:", brand["number_stores"])
#Exercise 4
def describe_city( city, country = 'MOR' ) :
   print( f"{city} is in {country}")
describe_city('Reykjavik', )
#Exercise 5
def random_number(user_number):
    if 1 <= user_number <= 100:
        print("success message")
    else:
        print("fail message")
random_number(10)
random_number(261)

#Exercise 6
def make_shirt(size, text='I love Python'):  
    print(f"The size of the shirt is {size} and the message is '{text}'.")

make_shirt('large', 'I love Python')  
make_shirt('medium')    
make_shirt('small')  
make_shirt('extra large', 'Keep calm')  
#Exercise 7
import random

def get_random_temp(season):
    if season == 'winter':
        return round(random.uniform(-10, 16), 1)
    elif season == 'spring':
        return round(random.uniform(10, 25), 1)
    elif season == 'summer':
        return round(random.uniform(20, 40), 1)
    elif season == 'autumn':
        return round(random.uniform(10, 24), 1)
    else:
        raise ValueError("Unknown season")

def determine_season(month):
    if month in [12, 1, 2]:
        return 'winter'
    elif month in [3, 4, 5]:
        return 'spring'
    elif month in [6, 7, 8]:
        return 'summer'
    elif month in [9, 10, 11]:
        return 'autumn'

def main():
        month = int(input("Enter the number of the month (1-12): "))
        if month < 1 or month > 12:
            print("Invalid month number. Please enter a number between 1 and 12.")
            return
        
        season = determine_season(month)
        temperature = get_random_temp(season)
        
        print(f"The temperature right now is {temperature} degrees Celsius.")

        if temperature < 0:
            print("Brrr, that's freezing! Wear some extra layers today.")
        elif 0 <= temperature <= 16:
            print("Quite chilly! Don't forget your coat.")
        elif 17 <= temperature <= 23:
            print("Cool weather. A light jacket should be fine.")
        elif 24 <= temperature <= 32:
            print("Warm weather. Dress lightly.")
        elif 33 <= temperature <= 40:
            print("It's hot outside! Stay hydrated.")
        else:
            print("Unusual temperature!")
        print("Please enter a valid integer for the month.")

main()
 #Exercise 8
def quiz_game(questions):
    ques = 0
    for x in questions:
        answer = input(x["question"] + " ").lower()
        if answer == x["answer"].lower():
            print("Correct!")
            ques += 1
        else:
            print(f"Wrong! Answer: {x['answer']}")
    
    print(f"Quiz done! Score: {ques}/{len(questions)}")

data = [
    {"question": "What is 2+2?", "answer": "4"},
    {"question": "Color of the sky?", "answer": "Blue"}
]
quiz_game(data)


    






   









 


    

    


    
   

