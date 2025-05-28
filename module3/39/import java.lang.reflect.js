import java.lang.reflect.Method;

class Sample {
    public void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    private void secret() {
        System.out.println("This is a secret method.");
    }
}

public class ReflectionExample {
    public static void main(String[] args) {
        try {
            // Load the Sample class dynamically
            Class<?> clazz = Class.forName("Sample");

            // Create an instance of the Sample class
            Object obj = clazz.getDeclaredConstructor().newInstance();

            // Get all declared methods
            Method[] methods = clazz.getDeclaredMethods();
            System.out.println("Methods in Sample class:");
            for (Method method : methods) {
                System.out.println("- " + method.getName());

                // Print parameter types
                Class<?>[] paramTypes = method.getParameterTypes();
                for (Class<?> paramType : paramTypes) {
                    System.out.println("   Param: " + paramType.getName());
                }
            }

            // Invoke the greet method with a String parameter
            Method greetMethod = clazz.getMethod("greet", String.class);
            greetMethod.invoke(obj, "World");

            // Access and invoke the private method
            Method secretMethod = clazz.getDeclaredMethod("secret");
            secretMethod.setAccessible(true); // bypass private access
            secretMethod.invoke(obj);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
