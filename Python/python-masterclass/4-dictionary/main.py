dict1 = {'key1': "Lamb", "key2": "Goat", "key3": "Cow"}
print(dict1["key2"])

price_list = {"Mercedes Benz": 50000, "Chevrolet Cobalt SS": 10000, "Carrera GT": 90000}
print(price_list["Mercedes Benz"])

dict2 = {"key1": "Pollo", "key2": 300, "key3": [1, 2, 3, 4, 5], "key4": {"key5": "Apple", "key6": "Pinneaple"}}
for keys in dict2:
    print(dict2[keys])
    
# Methods
print('')
print(dict2.keys())
print(dict2.values())
print(dict2.items())

print('')
dict2["key4"]["key6"] = "PINNEAPLE"
print(dict2)