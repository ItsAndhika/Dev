# Tuples
cart_t = (1, 2, 3, 4, 5)
cart_t2 = 1, 2, 3, 4, 5
print(cart_t)
print(cart_t2)
print(type(cart_t))
print(type(cart_t2))

# How to force change the value of tuples
cart_t = list(cart_t)
cart_t[2] = "Bajing"
print(cart_t)

# Methods
print('')
print(cart_t2.count(2))
print("")

# Sets
set1 = set()
print(type(set1))
set1.add("azul")
print(set1)
num_list = {1, 3, 54, 7 ,2 , 5, 8, 0, 2}
print(num_list)