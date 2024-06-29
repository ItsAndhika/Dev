# Range
for item in range(1, 10):
    print(item)
    
number = list(range(1, 11))
print(number)

# Enumerate: to show the index of items
# for item in 'kontolodon':
#     print(item)
word = 'abcdefghijklmn'
for item in enumerate(word):
    print(item)
    
print('')

# Zip
list1 = list(range(1, 6))
list2 = ['a', 'b', 'c', 'd', 'e']
list3 = [100, 200, 300, 400, 500, 600, 700, 800, 900]
for item in zip(list1, list3):
    print(item)
    
# Item checking
sentece = 'i am learning python'
is_char_exist = 'g' in sentece
print(is_char_exist)
rectangle = {'a': 100, 'b': 200, 'c': 300}
is_value_exist = 200 in rectangle.values()
print(is_value_exist)
print('')

# Advanced for loops
# common
list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
list2 = []
for item in list1:
    list2.append(list1)
# print(list2)
# advanced
list3 = [item for item in list1]
print(list3)
list4 = [item for item in list1 if item % 2 == 0]
print(list4)
list4 = [item if item % 2 == 0 else 'this number is odd' for item in list1]
print(list4)