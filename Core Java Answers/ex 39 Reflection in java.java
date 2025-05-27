import java.lang.reflect.Method;

public class ReflectionExample {
    public void greet(String name) {
        System.out.println("Hello, " + name);
    }

    public static void main(String[] args) throws Exception {
        Class<?> cls = Class.forName("ReflectionExample");
        Object obj = cls.getDeclaredConstructor().newInstance();

        Method[] methods = cls.getDeclaredMethods();
        for (Method m : methods) {
            System.out.println("Method: " + m.getName());
        }

        Method greet = cls.getMethod("greet", String.class);
        greet.invoke(obj, "Alice");
    }
}
