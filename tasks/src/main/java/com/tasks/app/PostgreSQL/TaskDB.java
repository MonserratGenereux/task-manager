package com.tasks.app.PostgreSQL;

import java.sql.*;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class TaskDB {
	
	private static final String DBCLASS = "org.postgresql.Driver";
	private static final String DBNAME = "jdbc:postgresql://localhost:5432/testdb"; 
	private static final String DBUSER = "victormanuel";
	private static final String PASSWORD = "Vg0510!3"; 
	
	public void assignValues(){
		
	}
	
	public boolean createTask(){
		Connection c = null;
	      Statement stmt = null;
	      try {
	         Class.forName(DBCLASS);
	         c = DriverManager
	            .getConnection(DBNAME, DBUSER, PASSWORD);
	         System.out.println("Opened database successfully");

	         stmt = c.createStatement();
	         String sql = "CREATE TABLE TASK " +
	            "(ID TEXT PRIMARY KEY     NOT NULL," +
	            " USER_ID         INT    NOT NULL, " +
	            " NAME 			  TEXT   NOT NULL" +
	            " TYPE            INT     NOT NULL, " +
	            " DATE	          CHAR(50), " +
	            " SCORE           REAL)";
	         stmt.executeUpdate(sql);
	         stmt.close();
	         c.close();
	         return true;
	      } catch ( Exception e ) {
	         System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	         System.exit(0);
	         return false;
	      }
	}

}
