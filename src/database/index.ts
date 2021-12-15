import { createConnection } from "typeorm";

createConnection().then(connection => {

}).catch(error => {
    console.log("unable to connect to database", error);
});