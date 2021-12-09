import express, { response } from "express";
import "express-async-errors";
import { routes } from "./routes";
import { createConnection } from "typeorm";
import { globalErrorHandle } from "./middlewares/globalError";

createConnection().then(connection => {

    const app = express();

    app.use(express.json());

    app.use(routes);

    app.use(globalErrorHandle)

    app.listen(3333, () => {
        console.log("server is ronning at port 3333");
    });

}).catch(error => {
    console.log("unable to connect to database", error);
});