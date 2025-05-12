import random

class Game:
    def get_user_item(self):
        options = ["rock", "paper", "scissors"]

        while True:
            user_input = input("Please choose one of the options (rock, paper, scissors): ").lower()
            if user_input in options:
                return user_input
            else:
                print("Invalid choice, please try again.") 
    
    def get_computer_item(self):
        options = ["rock", "paper", "scissors"]
        computer_choice = random.choice(options)
        return computer_choice
    
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        
        if (user_item == "rock" and computer_item == "scissors") or \
           (user_item == "paper" and computer_item == "rock") or \
           (user_item == "scissors" and computer_item == "paper"):
            return "win"  
        return "loss"
    
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        
        result_text = {
            'win': 'You win!',
            'loss': 'You lose!',
            'draw': 'You drew!'
        }[result]
        print(f"You selected {user_item}. The computer selected {computer_item}. {result_text}")
        
        return result

# Test the game
game = Game()
result = game.play()
print(f"Result: {result}")
    

        
        