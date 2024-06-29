# Strings tidak bisa diganti isi datanya
name = "Badrol"
# name[1] = "C"
name += " Sudrol"
print(name)
print(name * 2)
print("")

# Methods in Python
string1 = "I dunno what to do"
amount = 10
phi = 22/7
wide1 = 504.4
wide2 = 600.5
print(string1.upper())
print(string1.split())
print("There are {} oranges".format(amount))
print("If u wanna calculate circle, u gotta need phi = {}".format(phi))
print("Budi's circle area is {a} {b}".format(a = wide1, b = wide2))

# The format = {value:wide.how_many_number_behind_comma f}
print("Budi's circle area is {a:5.2f} {b:7.4f}".format(a = wide1, b = wide2))