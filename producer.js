const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  const producer = kafka.producer();
  console.log("Connecting Producer...");
  await producer.connect();
  console.log("Producer has connected!!");

  rl.setPrompt("> ");
  rl.prompt();

  rl.on("line", async (line) => {
    const [driverName, location] = line.split(" ");

    await producer.send({
      topic: "driver-updates",
      messages: [
        {
          partition: location.toLowerCase() === "mumbai" ? 0 : 1,
          key: "location-update",
          value: JSON.stringify({ name: driverName, loc: location }),
        },
      ],
    });
  }).on("close", async () => {
    console.log("Producer has disconnected!!");
    await producer.disconnect();
  });
}

init();
