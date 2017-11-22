package com.tasks.app.events.publisher.amqp;

import java.io.IOException;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.tasks.app.events.publisher.TaskPublisher;
import com.tasks.proto.TasksMicroservice.Task;

public class AMQPTaskPublisher implements TaskPublisher {
	
	private Connection connection;
	private Channel channel;
	private final String bindingKey;
	private final String exchange;

	public AMQPTaskPublisher(String uri, String bindingKey, String exchange) throws Exception {
		ConnectionFactory factory = new ConnectionFactory();
		factory.setHost(uri);

		this.connection = factory.newConnection();
		System.out.println(this.connection);
		this.channel = connection.createChannel();
		this.bindingKey = bindingKey;
		this.exchange = exchange;
	}

	@Override
	public void publish(Task task) {
		try {
			channel.basicPublish(this.exchange, this.bindingKey, null, task.toByteArray());
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void close() {
		try {
			this.channel.close();
			this.connection.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
