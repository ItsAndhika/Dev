public class NumberDataTypeConversion {
    public static void main(String[] args) {
        // It's automatically converted by Java
        byte byteTest = 100;
        short shortTest = byteTest;
        int intTest = shortTest;
        long longTest = intTest;

        // We have to force if we wanna change the data type from smaller type to bigger type
        // Be carefull when we wanna change it
        byte byteTest2 = (byte) longTest;
        short shortTest2 = (short) intTest;
        int intTest2 = (int) shortTest;
        long longTest2 = (long) byteTest;
    }
}
