#Exercise 1
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

first_cat = Cat("gatto", 10)
second_cat = Cat("milo",3)

print(first_cat.name)
print(first_cat.age)

print(second_cat.name)
print(second_cat.age)
#Exercise 2
class Dog:
    def __init__(self,name,height):
        self.name = name
        self.height = height
    
    def bark(self):
        print( self.name +" " "woof!!")
    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

davids_dog = Dog("Rex", 50)
print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"Sarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()


if sarahs_dog.height > davids_dog.height:
    print(f"sarah's dog is bigger {sarahs_dog.name} pas pouge")
elif sarahs_dog.height < davids_dog.height:
    print(f"david's dog is bigger {davids_dog.name} pas pouge")
else:
    print("both dogs are the same height")
    #Exercise 3
class Song:
    def __init__(self,lyrics):
        self.lyrics = lyrics 
    
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)
        
stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()
    #Exercise 4
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.grouped_animals = {}
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(f"\nAnimals in {self.name}:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()
        self.grouped_animals = {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in self.grouped_animals:
                self.grouped_animals[first_letter] = [animal]
            else:
                self.grouped_animals[first_letter].append(animal)

    def get_groups(self):
        print(f"\nGrouped animals in {self.name}:")
        sorted_keys = sorted(self.grouped_animals.keys())
        for idx, key in enumerate(sorted_keys, start=1):
            print(f"{idx}: {self.grouped_animals[key]}")

new_york_zoo = Zoo("New York Zoo")
new_york_zoo.add_animal("Zebra")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Antelope")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Baboon")

new_york_zoo.get_animals()
new_york_zoo.sell_animal("Zebra")


new_york_zoo.get_animals()
new_york_zoo.sort_animals()


new_york_zoo.get_groups()
 


    


    










 