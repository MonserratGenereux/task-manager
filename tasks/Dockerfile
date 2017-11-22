FROM maven:3-jdk-8

WORKDIR /usr/local/tasks

COPY . .

RUN mvn package

CMD ["mvn","exec:java"]
