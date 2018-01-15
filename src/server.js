const app = require("./config/express");
const { createServer } = require("http");

const server = createServer(app)
    .listen(3000, "0.0.0.0",()=>{
        console.group(`Server HTTP`);
        console.log(`Host: ${server.address().address}`);
        console.log(`Port: ${server.address().port}`);
        console.groupEnd();
    })
