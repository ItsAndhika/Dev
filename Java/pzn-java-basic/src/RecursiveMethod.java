public class RecursiveMethod {
    public static void main(String[] args) {
        factorial(5);
    }

    // Without recursive method
    // static int factorial(int value) {
    //     int result = 1;
    //     for(int i = 1; i < value; i++) {
    //         result *= i;
    //     }

    //     return result;
    // }

    // With recursive method
    static int factorial(int value) {
        if(value == 1) {
            return 1;
        } else {
            return value * factorial(value - 1);
        }
    }
}
