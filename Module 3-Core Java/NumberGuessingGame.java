import java.util.Scanner;
import java.util.Random;
class NumberGuessingGame {
public static void main(String args[]) {
Scanner sc = new Scanner(System.in);
Random rand = new Random();
int secretNumber = rand.nextInt(100) + 1;
int guess = 0;
System.out.println("Guess a number between 1 and 100:");
while (guess != secretNumber) {
guess = sc.nextInt();
if (guess > secretNumber) {
System.out.println("Too High!");
}
else if (guess < secretNumber) {
System.out.println("Too Low!");
}
else {
System.out.println("Correct Guess!");
}
}
}
}