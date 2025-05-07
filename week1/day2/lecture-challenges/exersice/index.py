my_dic = {}
while True:
    key = input("Enter a key (or 'quit' to stop): ") 
    if key.lower() == 'quit':
        break
    value = input(f"Enter the value for '{key}': ")
    my_dic[key] = value

for key, value in my_dic.items():
    print(f"{key}: {value}")

