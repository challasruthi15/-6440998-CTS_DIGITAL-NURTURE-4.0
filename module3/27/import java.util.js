import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaSortExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("Zara");
        names.add("Alice");
        names.add("John");
        names.add("Bob");

        System.out.println("Before sorting: " + names);

        // Sort using lambda expression (alphabetically)
        Collections.sort(names, (s1, s2) -> s1.compareToIgnoreCase(s2));

        System.out.println("After sorting: " + names);
    }
}
