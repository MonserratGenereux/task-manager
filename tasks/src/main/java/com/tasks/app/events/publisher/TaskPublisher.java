package com.tasks.app.events.publisher;

import com.tasks.proto.TasksMicroservice.Task;

public interface TaskPublisher {
	public void publish(Task task);
	public void close();
}
