public class ArrayDataType {
    public static void main(String[] args) {
        String[] myArray = new String[3];
        myArray[0] = "Lodon";
        myArray[1] = "Budi";
        myArray[2] = "Udin";
        // System.out.println(myArray[1]);

        // Array initializer
        int[] arrayInt = new int[]{
            10, 20, 30
        };
        Integer[] arrayInt2 = {
            40, 50, 60, 70
        };
        String[] arrayString = {
            "Lodon", "Ilham", "Kurniawan"
        };
        System.out.println(arrayInt);

        // Array in array
        String[][] students = {
            {"Badu", "Lodon"},
            {"Udin", "Budi"},
            {"Hitler", "Stalin"}
        };
        System.out.println(students[0][1]);

        boolean ja = true;
    }
}
