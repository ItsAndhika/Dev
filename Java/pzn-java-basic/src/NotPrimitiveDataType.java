public class NotPrimitiveDataType {
    public static void main(String[] args) {
        Integer testInteger = 10;
        Short testShort; // This is null if we don't declare the value of the primitive data type

        // Convertion
        int int1 = 2;
        Integer int2 = int1;

        short short1 = int2.shortValue();
        byte byte1 = testInteger.byteValue();
        System.out.println(byte1);
    }
}
