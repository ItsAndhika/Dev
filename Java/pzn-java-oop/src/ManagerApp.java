public class ManagerApp {
    public static void main(String[] args) {
        Manager manager = new Manager();
        manager.name = "Badrol";
        manager.sayHello("Abdol");

        VicePresident vicePresident = new VicePresident();
        vicePresident.name = "Asep";
        vicePresident.sayHello("Udin");
    }
}
