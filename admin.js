const { kafka } = require("./client");

async function init(){
    const admin = kafka.admin();

    console.log("Admin connectiong...");
    admin.connect();
    console.log("Admin connected!!");

    console.log("Admin has started creating some topics.");
    await admin.createTopics({
        topics: [{
            topic: "driver-updates",
            numPartitions:2
        }]
    });
    console.log("Admin has created some topics!!");
    await admin.disconnect();
}

init();