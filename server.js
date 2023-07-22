const express = require("express");

const app = express();

const port = 3000;

let requestCount = 0;

app.get("/", (request, response) => {
    requestCount = requestCount + 1;
    console.log(`Got request ${requestCount}`);
    response.send("Hello");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})