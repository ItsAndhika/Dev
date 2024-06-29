def sayHello():
    print("Hello")
sayHello()
def does_it_contain_python(sentence):
    return sentence.lower().__contains__('python')
print(does_it_contain_python('Python'))
print('')

# *Args and **Kwargs
def plus(*args):
    print(sum((args)))
plus(100, 20932, 32, 32, 13 , 123, 2)
def check_kwargs(**kwargs):
    print(kwargs)
check_kwargs(child="kirik")

# Joining *args and *kwargs
def function(*args, **kwargs):
    print("Quiero comprar {} {} en efectivo".format(args[0], kwargs["comida"]))
function(23, 19, 89,30, comida="pollo")