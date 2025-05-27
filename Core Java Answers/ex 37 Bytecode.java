

public class HelloWorld {
    
    
    public HelloWorld() {
        
    }

    public void greet() {
        System.out.println("Hello, bytecode!");
    }

    
    public static void main(String[] args) {
        HelloWorld hw = new HelloWorld();
        hw.greet();
    }
}
