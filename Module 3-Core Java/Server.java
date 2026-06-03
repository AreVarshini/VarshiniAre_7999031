import java.io.*;
import java.net.*;

public class Server {
    public static void main(String[] args)
            throws Exception {

        ServerSocket ss =
                new ServerSocket(5000);

        System.out.println("Waiting...");

        Socket s = ss.accept();

        BufferedReader br =
                new BufferedReader(
                        new InputStreamReader(
                                s.getInputStream()));

        System.out.println("Client: "
                + br.readLine());

        ss.close();
    }
}