import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class JdbcTransactionExample {

    private static final String URL = "jdbc:sqlite:bank.db";

    public static void main(String[] args) {
        try {
            transferMoney(1, 2, 100.0);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void transferMoney(int fromAccountId, int toAccountId, double amount) throws SQLException {
        Connection conn = null;
        PreparedStatement debitStmt = null;
        PreparedStatement creditStmt = null;

        try {
            conn = DriverManager.getConnection(URL);
            conn.setAutoCommit(false);  // start transaction

            // Debit from source account
            String debitSql = "UPDATE accounts SET balance = balance - ? WHERE id = ?";
            debitStmt = conn.prepareStatement(debitSql);
            debitStmt.setDouble(1, amount);
            debitStmt.setInt(2, fromAccountId);
            int debitUpdated = debitStmt.executeUpdate();

            // Credit to target account
            String creditSql = "UPDATE accounts SET balance = balance + ? WHERE id = ?";
            creditStmt = conn.prepareStatement(creditSql);
            creditStmt.setDouble(1, amount);
            creditStmt.setInt(2, toAccountId);
            int creditUpdated = creditStmt.executeUpdate();

            if (debitUpdated == 1 && creditUpdated == 1) {
                conn.commit();  // commit transaction
                System.out.println("Transfer successful.");
            } else {
                conn.rollback();  // rollback transaction if any update fails
                System.out.println("Transfer failed, transaction rolled back.");
            }

        } catch (SQLException e) {
            if (conn != null) {
                conn.rollback();  // rollback on exception
            }
            throw e;
        } finally {
            if (debitStmt != null) debitStmt.close();
            if (creditStmt != null) creditStmt.close();
            if (conn != null) conn.close();
        }
    }
}
