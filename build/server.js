"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = require("./routes");
const typeorm_1 = require("typeorm");
const globalError_1 = require("./middlewares/globalError");
(0, typeorm_1.createConnection)().then(connection => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(routes_1.routes);
    app.use(globalError_1.globalErrorHandle);
    app.listen(3333, () => {
        console.log("server is ronning at port 3333");
    });
}).catch(error => {
    console.log("unable to connect to database", error);
});
