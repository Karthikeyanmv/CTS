class MessageThread extends Thread {
    private String message;

    MessageThread(String msg) {
        this.message = msg;
    }

    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(message + " - " + i);
            try { Thread.sleep(500); } catch (InterruptedException e) {}
        }
    }
}

public class ThreadDemo {
    public static void main(String[] args) {
        Thread t1 = new MessageThread("Thread 1");
        Thread t2 = new MessageThread("Thread 2");

        t1.start();
        t2.start();
    }
}
