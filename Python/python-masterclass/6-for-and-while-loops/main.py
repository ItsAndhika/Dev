for i in 'kontolodon':
    print(i, end='')
    
print('')

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for number in numbers:
    if (number % 2 == 0):
        print(number, ' is even')
    else:
        print(number, ' is odd')

# For loop with tuple and list multiple items
box1 = ((1, 2), (3, 4), (5, 6))
for item in box1:
    print(item)
for a, b in box1:
    print(a)
    print(b)
    
print('')

box2 = [[1, 2, 'a'], [3, 4, 'b'], [5, 6, 'c']]
for a, b, c in box2:
    print(a)
    print(b)
    print(c)
    
# While loop
