#exersice1
class Pets():
    def __init__(self, animals):
        self.animals = animals
    def walk(self):
        for animal in self.animals:
            print(animal.walk())
class Cat():
    is_lazy = True
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def walk(self):
        return f'{self.name} is just walking around'
class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'
class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
bengal_cat = Bengal("Leo", 3)
chartreux_cat = Chartreux("Milo", 4)
siamese_cat = Siamese("Luna", 2)
all_cats = [bengal_cat, chartreux_cat, siamese_cat]
sara_pets = Pets(all_cats)
sara_pets.walk()
#Exercise2
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        if self.age == 0:
            return float('inf')  
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        
        if my_power > other_power:
            return f"{self.name} wins the fight against {other_dog.name}"
        elif my_power < other_power:
            return f"{other_dog.name} wins the fight against {self.name}"
        else:
            return f"The fight between {self.name} and {other_dog.name} is a draw"
        
        
  
dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 4, 25)

print(dog1.bark())           
print(dog1.run_speed())      
print(dog1.fight(dog2)) 

# #Exercise 3 
import random

class Dog:
     def __init__(self, name, age, breed, trained=False):
         self.name = name
         self.age = age
         self.breed = breed
         self.trained = trained

     def bark(self):
         return f'{self.name} is barking!'

     def train(self):
         print(self.bark())
         self.trained = True
class PetDog(Dog):    
     def __init__(self, name, age, breed, trained=False, owner=None):    
             super().__init__(name, age, breed, trained)       
             self.owner = owner
     def play(self, *dog_names):    
             names = ', '.join(dog_names)       
             print(f"{names} all play together.")

     def do_a_trick(self):
         if self.trained:
             tricks = [
                 f"{self.name} does a barrel roll.",
                 f"{self.name} stands on his back legs.",
                 f"{self.name} shakes your hand.",
                 f"{self.name} plays dead."
             ]
             print(random.choice(tricks))
         else:
             print(f"{self.name} is not trained yet.")
#Exercise 4 
class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members
    def family_presentation(self):
        print(f"Family Name: {self.last_name}")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")
            
my_family = Family("Smith", [
    {'name': 'Mohamed', 'age': 28, 'gender': 'Male', 'is_child': 'No'},
    {'name': 'Sara', 'age': 10, 'gender': 'Female', 'is_child': 'Yes'}
])
my_family.family_presentation()
#Exercise 5
class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name  
    def show_family(self):
        print(f'The {self.last_name} Family Members:')
        for member in self.members:
            print(f"{member['name']} ({member['age']} years old)")
class TheIncredibles(Family):
    def __init__(self, last_name):
        members = [
            {"name": "jamal", "age": 40, "power": "Super Strength", "incredible_name": "Mr. Incredible"},
            {"name": "mohmed", "age": 38, "power": "Elasticity", "incredible_name": "Elastigirl"},
            {"name": "brahin", "age": 15, "power": "Invisibility", "incredible_name": "Violet"},
           ]
        super().__init__(members, last_name)

    def show_incredible_family(self):
        print(f'The Incredible {self.last_name} Family Members:')
        for member in self.members:
            print(f"{member['incredible_name']} ({member['power']})")

incredible_family = TheIncredibles('Parr')
incredible_family.show_family()
incredible_family.show_incredible_family()

        
