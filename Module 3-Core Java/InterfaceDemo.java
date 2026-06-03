interface Playable{
void play();
}
class  Cricket implements Playable{
public void play(){
System.out.println("Playing Cricket");
}
}
class Tennis implements Playable{
public void play(){
System.out.println("Playing Tennis");
}
}
class InterfaceDemo{
public static void main(String args[]){
 Cricket c=new Cricket();
Tennis T=new Tennis();
c.play();
T.play();
}
}