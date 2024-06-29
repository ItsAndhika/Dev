public class ForEachLoop {
    public static void main(String[] args) {
        String[] names = {
            "Lodon", "Budi", "Udin", "Jono", "Joni", "Badrul"
        };

        // Common for loop
        // for(int i = 0; i < names.length; i++) {
        //     System.out.println(names[i]);
        // }

        // For each
        for(String value: names) {
            System.out.println(value);
        }
    }
}
