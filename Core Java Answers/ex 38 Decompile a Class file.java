// File: SimpleCalculator.java

public class SimpleCalculator {

    
    public int add(int a, int b) {
        return a + b;
    }

    
    public int subtract(int a, int b) {
        return a - b;
    }

    
    public int multiply(int a, int b) {
        return a * b;
    }

    
    public int divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot divide by zero!");
        }
        return a / b;
    }

    public static void main(String[] args) {
        SimpleCalculator calc = new SimpleCalculator();

        int x = 10;
        int y = 5;

        System.out.println("Add: " + calc.add(x, y));         // 15
        System.out.println("Subtract: " + calc.subtract(x, y)); // 5
        System.out.println("Multiply: " + calc.multiply(x, y)); // 50
        System.out.println("Divide: " + calc.divide(x, y));     // 2
    }
}
