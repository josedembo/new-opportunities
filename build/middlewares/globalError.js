"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandle = void 0;
const AppErros_1 = require("../model/errors/AppErros");
function globalErrorHandle(err, request, response, next) {
    if (err instanceof AppErros_1.AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }
    console.log(err);
    return response.status(500).json({
        status: "error",
    });
}
exports.globalErrorHandle = globalErrorHandle;
