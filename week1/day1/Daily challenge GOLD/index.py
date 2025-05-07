from datetime import datetime

def print_personalized_cake():
    birthdate = input("Please enter your birthdate (DD/MM/YYYY): ")
    
    day, month, year = map(int, birthdate.split('/'))
    today = datetime.now()
    age = today.year - year - ((today.month, today.day) < (month, day))
    
    candles = 'i' * min(age, 10)  
    
    print(f"""
      ___{candles}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |   Age: {age:>3}    |
   ~~~~~~~~~~~~~~~~~~~
    """)

print_personalized_cake()
