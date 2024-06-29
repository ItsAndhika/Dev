class Person {
    String name;
    String address = "New York";
    final String country = "USA";

    Person(String name, String address) {
        this.name = name;
        this.address = address;
    }
    
    Person(String name) {
        this(name, null);
    }
    
    Person() {
        this(null);
    };
    
    void sayHello(String name) {
        System.out.println("Hello " + name + " I am " + this.name + " and I am from " + this.address);
    }
}