import express, { response } from "express";

const app = express();

app.get("/", (request, response) => {
    response.send("Hello world newOpportunities");
});

app.listen(3333, () => {
    console.log("server is ronning at port 3333");
});