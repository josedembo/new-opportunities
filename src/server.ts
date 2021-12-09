import express, { response } from "express";
import { routes } from "./routes";
import { createConnection } from "typeorm";

createConnection().then(connection => {

    const app = express();

    app.use(express.json());

    app.use(routes);

    app.listen(3333, () => {
        console.log("server is ronning at port 3333");
    });

}).catch(error => {
    console.log("unable to connect to database", error);
});