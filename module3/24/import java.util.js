import java.util.ArrayList;
import java.util.Scanner;

public class StudentList {
    public static void main(String[] args) {
        ArrayList<String> students = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        String input;

        System.out.println("Enter student names (type 'done' to finish):");

        while (true) {
            System.out.print("Enter name: ");
            input = scanner.nextLine();
            if (input.equalsIgnoreCase("done")) {
                break;
            }
            students.add(input);
        }

        System.out.println("\nAll student names entered:");
        for (String name : students) {
            System.out.println(name);
        }

        scanner.close();
    }
}
