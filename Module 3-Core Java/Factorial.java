import java.util.Scanner;
class Factorial{
public static void main(String args[]){
Scanner sc=new Scanner(System.in);
int number=sc.nextInt();
int fact=1;
if(number<0){
System.out.println("Enter non-negeatve number");
}
else{
if(number==0||number==1){
System.out.println("Factorial = 1");
}
else{
for(int i=1;i<=number;i++){
fact=fact*i;
}

System.out.println("Factorial = "+fact);
}
}
}
}