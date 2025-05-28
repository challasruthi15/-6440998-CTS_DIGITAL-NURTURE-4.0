import java.io.*;
import java.net.*;

public class ChatServer {
    public static void main(String[] args) {
        final int PORT = 12345;

        try (ServerSocket serverSocket = new ServerSocket(PORT)) {
            System.out.println("Server started. Waiting for client...");

            Socket clientSocket = serverSocket.accept();
            System.out.println("Client connected.");

            // Streams for communication
            BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);

            // For reading server console input
            BufferedReader serverInput = new BufferedReader(new InputStreamReader(System.in));

            String clientMsg, serverMsg;

            // Start a thread to listen for messages from client
            Thread readThread = new Thread(() -> {
                try {
                    while ((clientMsg = in.readLine()) != null) {
                        System.out.println("Client: " + clientMsg);
                    }
                } catch (IOException e) {
                    System.out.println("Connection closed by client.");
                }
            });
            readThread.start();

            // Main thread sends messages to client
            while ((serverMsg = serverInput.readLine()) != null) {
                out.println(serverMsg);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
