package com.tasks.app;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.logging.Logger;

import com.tasks.app.db.PostgreSQL.TasksDatabaseSQL;
import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;

import io.grpc.Server;
import io.grpc.netty.NettyServerBuilder;

public class App {
	private static final Logger logger = Logger.getLogger(App.class.getName());

	private Server server;
	private TasksDatabaseSQL taskDB;

	private void start() throws IOException {
		Config conf = ConfigFactory.load();
		final int port = conf.getInt("server.port");
		final String host = conf.getString("server.host");
		taskDB = new TasksDatabaseSQL();
		server = NettyServerBuilder.forAddress(new InetSocketAddress(host, port)).
				addService(new TasksImpl(taskDB)).build().start();
		
		logger.info("Server started, listening on " + port);
		Runtime.getRuntime().addShutdownHook(new Thread() {
			@Override
			public void run() {
				// Use stderr here since the logger may have been reset by its
				// JVM shutdown hook.
				System.err.println("*** shutting down gRPC server since JVM is shutting down");
				App.this.stop();
				System.err.println("*** server shut down");
			}
		});
	}

	private void stop() {
		if (server != null) {
			server.shutdown();
		}
	}

	private void blockUntilShutdown() throws InterruptedException {
		if (server != null) {
			server.awaitTermination();
		}
	}

	public static void main(String[] args) throws IOException, InterruptedException {	
		final App server = new App();
		server.start();
		server.blockUntilShutdown();
	}
}
