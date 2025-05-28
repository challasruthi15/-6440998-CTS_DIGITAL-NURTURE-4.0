import java.util.HashMap;
import java.util.Scanner;

public class StudentMap {
    public static void main(String[] args) {
        HashMap<Integer, String> studentMap = new HashMap<>();
        Scanner scanner = new Scanner(System.in);
        String input;
        int id;

        System.out.println("Enter student ID and name pairs (type 'done' for ID to stop):");

        while (true) {
            System.out.print("Enter student ID: ");
            input = scanner.nextLine();
            if (input.equalsIgnoreCase("done")) {
                break;
            }
            try {
                id = Integer.parseInt(input);
            } catch (NumberFormatException e) {
                System.out.println("Invalid ID. Please enter a numeric value.");
                continue;
            }

            System.out.print("Enter student name: ");
            String name = scanner.nextLine();
            studentMap.put(id, name);
        }

        System.out.print("\nEnter student ID to retrieve name: ");
        try {
            id = Integer.parseInt(scanner.nextLine());
            String name = studentMap.get(id);
            if (name != null) {
                System.out.println("Student name: " + name);
            } else {
                System.out.println("No student found with ID " + id);
            }
        } catch (NumberFormatException e) {
            System.out.println("Invalid ID entered.");
        }

        scanner.close();
    }
}
