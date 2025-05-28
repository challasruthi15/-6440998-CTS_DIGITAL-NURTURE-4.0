import java.util.List;
import java.util.stream.Collectors;

public class RecordExample {
    // Define the record (Java 16+)
    public record Person(String name, int age) {}

    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Alice", 25),
            new Person("Bob", 17),
            new Person("Charlie", 30),
            new Person("Diana", 15)
        );

        // Print all persons
        people.forEach(System.out::println);

        // Filter persons aged 18 or older using Streams
        List<Person> adults = people.stream()
            .filter(p -> p.age() >= 18)
            .collect(Collectors.toList());

        System.out.println("\nAdults:");
        adults.forEach(System.out::println);
    }
}
