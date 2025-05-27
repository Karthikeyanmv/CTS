public class VirtualThreadsDemo {
    public static void main(String[] args) throws InterruptedException {
        Runnable task = () -> System.out.println("Hello from virtual thread: " + Thread.currentThread());

        for (int i = 0; i < 100_000; i++) {
            Thread.startVirtualThread(task);
        }

        Thread.sleep(2000); 
    }
}
