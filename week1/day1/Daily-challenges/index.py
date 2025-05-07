#chanllenge 
number = int(input("Enter your number:"))
length= int(input("Enter the desired length of the list:"))
multiples = [number * (i + 1) for i in range(length)]
print(f"number: {number} - length {length} ➞ {multiples}")
#Challenge 2
from itertools import groupby
user_word = input("Enter your word :")
user_word = input("Enter a word: ")
result = "".join(k for k, g in groupby(user_word))
print(f"user's word : \"{user_word}\" ➞ \"{result}\"")















