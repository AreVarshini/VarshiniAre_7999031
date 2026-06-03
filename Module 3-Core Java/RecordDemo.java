import java.util.List;

record Person(String name, int age) {}

public class RecordDemo {
    public static void main(String[] args) {

        List<Person> persons = List.of(
                new Person("Ram",20),
                new Person("Sita",17),
                new Person("John",25));

        persons.stream()
               .filter(p -> p.age() >= 18)
               .forEach(System.out::println);
    }
}