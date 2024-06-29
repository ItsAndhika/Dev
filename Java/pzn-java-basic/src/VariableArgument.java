public class VariableArgument {
    public static void main(String[] args) {
        // int[] values = {80, 90, 50, 60, 70};
        // sayCongrats("Lodon", values);
        sayCongrats("Lodon", 80, 90, 50, 60, 70);
    }

    // Without variable argument
    // static void sayCongrats(String name, int[] values) {
    //     int total = 0;
    //     for(int value : values) {
    //         total += value;
    //     }
    //     int finalValue = total / values.length;

    //     if(finalValue >= 75) {
    //         System.out.println("Congrats, you'have passed!");
    //     } else {
    //         System.out.println("Sorry, you don't passed!");
    //     }
    // }

    // With variable argument
    static void sayCongrats(String name, int... values) {
        int total = 0;
        for(int value : values) {
            total += value;
        }
        int finalValue = total / values.length;

        if(finalValue >= 75) {
            System.out.println("Congrats, you'have passed!");
        } else {
            System.out.println("Sorry, you don't passed!");
        }
    }
}
