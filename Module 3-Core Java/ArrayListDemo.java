import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListDemo {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        ArrayList<String> students = new ArrayList<>();

        System.out.print("How many names? ");
        int n = sc.nextInt();
        sc.nextLine();

        for(int i = 0; i < n; i++) {
            System.out.print("Enter name: ");
            students.add(sc.nextLine());
        }

        System.out.println("\nStudent Names:");

        for(int i=0;i<students.size();i++) {
            System.out.println(students.get(i));
        }
    }
}