public class SwitchCase {
    public static void main(String[] args) {
        String value = "L";
        switch(value) {
            case "A" -> System.out.println("You've passed with a good value");
            case "B", "C" -> System.out.println("You've passed");
            case "D" -> System.out.println("Ur value is like a dick nigga!");
            default -> System.out.println("Are go inside of a wrong class?");
        }
        
        String value2 = "A";
        String greet = switch(value2) {
            case "A":
                yield "You've passed with a good value";
            case "B", "C":
                yield "You've passed";
            case "D": 
                yield "Ur value is like a dick nigga!";
            default:
                yield "Are go inside of a wrong class?";
        }

        System.out.println(greet);
    }
}
