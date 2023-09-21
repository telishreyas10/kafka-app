const { Kafka } = require("kafkajs");

const os = require("os")
const networkInterfaces = os.networkInterfaces();
let ipAddress;

for (const key in networkInterfaces) {
    const interfaceList = networkInterfaces['Wi-Fi'];
    for (const iface of interfaceList) {
      if (!iface.internal && iface.family === "IPv4") {
        ipAddress = iface.address;
        break;
      }
    }
    if (ipAddress) break;
  }
console.log(ipAddress);

exports.kafka = new Kafka({
    clientId: 'my-kafka-app',
    brokers: [ipAddress]
})