SERVER PROGRAM:
import java.net.*;
import java.io.*;

public class Server {
    public static void main(String[] args) throws IOException {
        ServerSocket server = new ServerSocket(12345);
        System.out.println("Server started...");
        Socket client = server.accept();

        BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));
        PrintWriter out = new PrintWriter(client.getOutputStream(), true);

        BufferedReader keyboard = new BufferedReader(new InputStreamReader(System.in));
        String clientMsg, serverMsg;

        while ((clientMsg = in.readLine()) != null) {
            System.out.println("Client: " + clientMsg);
            if ("bye".equalsIgnoreCase(clientMsg)) break;
            System.out.print("Server: ");
            serverMsg = keyboard.readLine();
            out.println(serverMsg);
            if ("bye".equalsIgnoreCase(serverMsg)) break;
        }

        client.close();
        server.close();
    }
}

CLIENT PROGRAM:
import java.net.*;
import java.io.*;

public class Client {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 12345);

        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

        BufferedReader keyboard = new BufferedReader(new InputStreamReader(System.in));
        String clientMsg, serverMsg;

        while (true) {
            System.out.print("Client: ");
            clientMsg = keyboard.readLine();
            out.println(clientMsg);
            if ("bye".equalsIgnoreCase(clientMsg)) break;
            serverMsg = in.readLine();
            System.out.println("Server: " + serverMsg);
            if ("bye".equalsIgnoreCase(serverMsg)) break;
        }

        socket.close();
    }
}

