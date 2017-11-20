package com.tasks.app;

import io.grpc.BindableService;
import com.tasks.app.db.PostgreSQL.TasksDatabaseSQL;
import io.grpc.Server;
import io.grpc.ServerBuilder;
import java.io.IOException;
import java.util.logging.Logger;


public class App {
    private static final Logger logger = Logger.getLogger(App.class.getName());

  private Server server;
  private TasksDatabaseSQL taskDB;
  private void start() throws IOException {

      int port = 50051;
      taskDB = new TasksDatabaseSQL();
      server = ServerBuilder.forPort(port)
        .addService((BindableService) new TasksImpl(taskDB))
        .build()
        .start();
      logger.info("Server started, listening on " + port);
      Runtime.getRuntime().addShutdownHook(new Thread() {
          @Override
          public void run(){
              // Use stderr here since the logger may have been reset by its JVM shutdown hook.
            System.err.println("*** shutting down gRPC server since JVM is shutting down");
            App.this.stop();
            System.err.println("*** server shut down");
          }
      });
  }

  private void stop(){
      if (server != null) {
        server.shutdown();
      } 
  }
    private void blockUntilShutdown() throws InterruptedException {
        if (server != null) {
        server.awaitTermination();
        }
    }
    
    public static void main( String[] args ) throws IOException, InterruptedException {
        final App server = new App();
        server.start();
        server.blockUntilShutdown();
    }
}
