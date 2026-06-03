import java.util.Scanner;
class Array{
public static void main(String args[]){
Scanner sc=new Scanner(System.in);
int n=sc.nextInt();
int a[]=new int[n];
for(int i=0;i<n;i++){
a[i]=sc.nextInt();
}
int sum=0;
float average=0;
for(int i=0;i<n;i++){
sum+=a[i];
average=sum/n;
}
System.out.println("Sum = "+sum);
System.out.println("Average = "+average);
}
}