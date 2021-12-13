"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    jwt: {
        secret: `${process.env.JWT_SERCRET}`,
        expiresIn: "2d"
    }
};
