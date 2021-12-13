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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneUserService = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const User_1 = require("../../../entity/User");
const AppErros_1 = require("../../../model/errors/AppErros");
class GetOneUserService {
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = (0, typeorm_1.getRepository)(User_1.User);
            const verifyIfIsUuid = (0, uuid_1.validate)(id);
            if (!verifyIfIsUuid) {
                throw new AppErros_1.AppError("bad Request, invalid Id");
            }
            const userExists = yield userRepository.findOne(id);
            if (!userExists) {
                throw new AppErros_1.AppError("user not found");
            }
            const userResult = {
                id: userExists.id,
                name: userExists.name,
                username: userExists.username,
                email: userExists.email
            };
            return userResult;
        });
    }
}
exports.GetOneUserService = GetOneUserService;
