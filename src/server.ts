import express, { response } from "express";
import "express-async-errors";
import { routes } from "./routes";
import { globalErrorHandle } from "./middlewares/globalError";
import "./database/index";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(globalErrorHandle)

app.listen(3333, () => {
    console.log("server is ronning at port 3333");
});
