import java.sql.*;

public class StudentDAO {

    static String url = "jdbc:mysql://localhost:3306/studentdb";
    static String username = "root";
    static String password = "sudha@18";

    public static void insertStudent(int id, String name)
            throws Exception {

        Connection con =
                DriverManager.getConnection(url, username, password);

        String sql =
                "INSERT INTO students(id,name) VALUES(?,?)";

        PreparedStatement ps =
                con.prepareStatement(sql);

        ps.setInt(1, id);
        ps.setString(2, name);

        ps.executeUpdate();

        con.close();
    }

    public static void updateStudent(int id, String name)
            throws Exception {

        Connection con =
                DriverManager.getConnection(url, username, password);

        String sql =
                "UPDATE students SET name=? WHERE id=?";

        PreparedStatement ps =
                con.prepareStatement(sql);

        ps.setString(1, name);
        ps.setInt(2, id);

        ps.executeUpdate();

        con.close();
    }

    public static void main(String[] args) throws Exception {

        insertStudent(101, "Varshini");
        updateStudent(101, "Anjali");
    }
}