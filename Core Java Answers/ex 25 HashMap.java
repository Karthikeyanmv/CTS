import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<Integer, String> students = new HashMap<>();
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter student ID and name (0 to stop):");
        while (true) {
            int id = sc.nextInt();
            if (id == 0) break;
            String name = sc.next();
            students.put(id, name);
        }

        System.out.print("Enter ID to search: ");
        int searchId = sc.nextInt();
        String name = students.get(searchId);

        if (name != null) System.out.println("Name: " + name);
        else System.out.println("ID not found.");

        sc.close();
    }
}
