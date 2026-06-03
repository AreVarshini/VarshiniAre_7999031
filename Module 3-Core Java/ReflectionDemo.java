import java.lang.reflect.Method;

public class ReflectionDemo {

    public void greet() {
        System.out.println("Hello Reflection");
    }

    public static void main(String[] args)
            throws Exception {

        Class<?> c =
                Class.forName("ReflectionDemo");

        Object obj =
                c.getDeclaredConstructor()
                        .newInstance();

        Method methods[] =
                c.getDeclaredMethods();

        for(Method m : methods) {
            System.out.println(m.getName());
        }

        Method method =
                c.getDeclaredMethod("greet");

        method.invoke(obj);
    }
}