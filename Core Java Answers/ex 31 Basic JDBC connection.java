

import java.sql.*;

public class JdbcConnectionExample {
    public static void main(String[] args) {
        String url = "jdbc:sqlite:students.db"; 
        try (Connection conn = DriverManager.getConnection(url)) {
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id") + ", Name: " + rs.getString("name"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
