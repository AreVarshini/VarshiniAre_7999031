import java.util.*;
class Palindrome{
public static void main(String args[]){
Scanner sc=new Scanner(System.in);
String s=sc.nextLine();
s=s.replaceAll("[^a-zA-Z0-9]","");
s=s.toLowerCase();
String rev="";
for(int i=s.length()-1;i>=0;i--){
rev=rev+s.charAt(i);
}
if(s.equals(rev)){
System.out.println("Palindrome");
}
else{
System.out.println("Not a Palindrome");
}
}
}
