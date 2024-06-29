# String data type

# Literal assignment
first = "Lodon"
last = "Sudon"

print(type(first))
print(isinstance(first, str))

# Constructor function
pizza = str("Pepperoni")
print(type(pizza))
print(isinstance(pizza, str))

# Casting number to string
decade = str(1939)
print(type(decade))
print("Second World War happened in " + decade)

# Multiple lines
multiline = '''
Hola, que pasa amigo?

Estoy muy cansado hoy
                            quiero beber algo dulce
'''

print(multiline)

# Escaping special character
sentence = 'I\'m a man!\tHey\nman!'
print(sentence)

# String method
print(first)
print(first.lower())
print(first.upper())
print(first)

print(multiline.title())
print(multiline.replace('dulce', 'caliente'))
print(multiline)

print(len(multiline))

print("")

# Build a menu
title = "Menu".upper()
print(title.center(20, "="))
print("Coffee".ljust(16, ".") + "$1".rjust(4))
print("Muffin".ljust(16, ".") + "$2".rjust(4))
print("Cheescake".ljust(16, ".") + "$5".rjust(4))
print("")

# String index values
print(first[1])
print(first[-1])
print("")

# Some methods return boolean
print(first.startswith("L"))
print(first.startswith("z"))
print("")

# Numeric data type

# integer type
price = int(100)
print(type(price))

# float type
gpa = float(3.10)
print(type(gpa))

# complex type
comp_value  = 5+1j
print(type(comp_value))
print(comp_value.real)
print(comp_value.imag)
print("")

# Built-in functions for number
print(abs(gpa))
print(round(gpa))
print(round(gpa, 1))

import math
print(math.pi)
print(math.sqrt(64))
print(math.ceil(gpa))
print(math.floor(gpa))

# Casting string to number
zipcode = "10001"
zip_value = int(zipcode)
print(type(zipcode))
print(type(zip_value))