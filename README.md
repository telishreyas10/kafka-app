
# Kafka app

This app gives a basic understanding of  Kafka, an open-source distributed event streaming platform.

We explore the fundamental concepts and components of Kafka, including Kafka Topics, Message Partitions, and Consumer Groups.


## Prerequisites

Knowledge
- Node.JS Intermediate level
- Experience with designing distributed systems

Tools
- Node.js
- Docker
- VsCode

## Installation

 - Start Zookeper Container and expose PORT `2181`

```bash
  docker run -p 2181:2181 zookeeper
```
 - Start Kafka Container, expose PORT `9092` and setup ENV variables.

```bash
docker run -p 9092:9092 \
  -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
  -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
  -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
  confluentinc/cp-kafka
``` 
## Run Locally

- Clone the project

```bash
  git clone https://github.com/telishreyas10/kafka-app.git
```

- Go to the project directory

```bash
  cd kafka-app
```

- Install dependencies

```bash
  npm install
```
- Run Admin

```bash
  node admin.js
```

- Run Multiple Consumers

```bash
  node consumer.js <GROUP_NAME>
```

- Create Producer

```bash
  node producer.js
  > Anil Mumbai
  > Anil Delhi
  > Rakesh Mumbai
  > Rakesh Pune
```