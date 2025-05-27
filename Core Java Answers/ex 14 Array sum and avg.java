import java.util.Scanner;

public class ArraySumAverage {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        int[] arr = new int[n];

        System.out.println("Enter elements:");
        for (int i=0; i<n; i++) arr[i] = sc.nextInt();

        int sum = 0;
        for (int x : arr) sum += x;

        System.out.println("Sum = " + sum);
        System.out.println("Average = " + (sum/(double)n));

        sc.close();
    }
}
