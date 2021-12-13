"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthentication = void 0;
const AppErros_1 = require("../model/errors/AppErros");
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../config/auth"));
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
function userAuthentication(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new AppErros_1.AppError("Unauthorised", 401);
        }
        const [, token] = authHeader.split(" ");
        const { secret } = auth_1.default.jwt;
        try {
            const verifingToken = (0, jsonwebtoken_1.verify)(token, secret);
            const { sub, email, name } = verifingToken;
            const user = {
                id: sub,
                name,
                email
            };
            const userRepository = (0, typeorm_1.getRepository)(User_1.User);
            const verifyIfUserExists = yield userRepository.find({ where: { id: user.id } });
            if (verifyIfUserExists.length === 0) {
                throw new AppErros_1.AppError("Unauthorised");
            }
            request.user = user;
            next();
        }
        catch (error) {
            throw new AppErros_1.AppError("invalid token", 401);
        }
    });
}
exports.userAuthentication = userAuthentication;
