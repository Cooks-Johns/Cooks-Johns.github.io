import java.sql.*;

public class JbdcSelect {
	public static void main(String[] args) {

		try {
			Connection conn = DriverManger.getConnection (
				"jbdc:mysql://localhost:3306/ebookshop?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC",
				"root",""
				);
			
		}
	}
}