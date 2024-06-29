import sys
from random import randint
print("")
playerChoice = int(input("Enter...\n1 for rock\n2 for paper\n3 for scissor\nChoice : "))
compChoice = randint(1, 3)

if playerChoice < 1 or playerChoice > 3:
    sys.exit("Please enter 1 or 2 or 3 to choose between rock, paper, or scissor")

print("")
print("Your choice : " + str(playerChoice))
print("Computer choice : " + str(compChoice))
print("")

if playerChoice == 1 and compChoice == 3:
    print("You win!")
elif playerChoice == 2 and compChoice == 1:
    print("You win!")
elif playerChoice == 3 and compChoice == 2:
    print("You win!")
elif playerChoice == compChoice:
    print("Tie game!")
else:
    print("Computer win!")
    