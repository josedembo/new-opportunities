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
exports.SignInUserService = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../../../entity/User");
const AppErros_1 = require("../../../model/errors/AppErros");
const jsonwebtoken_1 = require("jsonwebtoken");
const crypto_js_1 = __importDefault(require("crypto-js"));
const auth_1 = __importDefault(require("../../../config/auth"));
class SignInUserService {
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = (0, typeorm_1.getRepository)(User_1.User);
            const existsUser = yield userRepository.findOne({ where: { email } });
            if (!existsUser) {
                throw new AppErros_1.AppError("user not found");
            }
            const PasswordHash = crypto_js_1.default.MD5(password).toString();
            if (PasswordHash !== existsUser.password) {
                throw new AppErros_1.AppError("user or password not match", 401);
            }
            const { secret, expiresIn } = auth_1.default.jwt;
            const token = (0, jsonwebtoken_1.sign)({
                name: existsUser.name,
                email: existsUser.email
            }, secret, {
                subject: existsUser.id,
                expiresIn
            });
            const user = existsUser;
            user === null || user === void 0 ? true : delete user.password;
            return {
                acessToken: token
            };
        });
    }
}
exports.SignInUserService = SignInUserService;
