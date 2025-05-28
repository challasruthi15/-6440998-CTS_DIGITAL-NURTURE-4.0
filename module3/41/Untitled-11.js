import java.util.concurrent.*;
import java.util.*;

public class CallableExecutorExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(5);

        List<Callable<String>> tasks = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            final int taskId = i;
            tasks.add(() -> {
                Thread.sleep(1000);
                return "Result from Task " + taskId;
            });
        }

        try {
            List<Future<String>> results = executor.invokeAll(tasks);

            for (Future<String> future : results) {
                System.out.println(future.get()); // Blocking call
            }

        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        } finally {
            executor.shutdown();
        }
    }
}
