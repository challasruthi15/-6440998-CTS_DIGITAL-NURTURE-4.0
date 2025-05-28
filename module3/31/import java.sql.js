import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.SQLException;

public class JdbcExample {

    public static void main(String[] args) {
        String url = "jdbc:sqlite:students.db";  // SQLite database file
        Connection conn = null;
        Statement stmt = null;

        try {
            // Load the SQLite JDBC driver (not needed for modern drivers, but safe)
            Class.forName("org.sqlite.JDBC");

            // Connect to the database
            conn = DriverManager.getConnection(url);

            // Create a statement
            stmt = conn.createStatement();

            // SQL query to select all from students table
            String sql = "SELECT id, name, age FROM students";

            // Execute the query
            ResultSet rs = stmt.executeQuery(sql);

            // Process the results
            System.out.println("ID\tName\tAge");
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                System.out.println(id + "\t" + name + "\t" + age);
            }

            // Close the ResultSet
            rs.close();

        } catch (ClassNotFoundException e) {
            System.out.println("SQLite JDBC driver not found.");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("Database error.");
            e.printStackTrace();
        } finally {
            try {
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
