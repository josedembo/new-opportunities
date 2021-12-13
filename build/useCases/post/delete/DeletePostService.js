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
exports.DeletePostService = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Post_1 = require("../../../entity/Post");
const AppErros_1 = require("../../../model/errors/AppErros");
class DeletePostService {
    execute(user, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const postRepository = (0, typeorm_1.getRepository)(Post_1.Post);
            const verifyIfIsUuid = (0, uuid_1.validate)(id);
            if (!verifyIfIsUuid) {
                throw new AppErros_1.AppError("bad Request, invalid Id");
            }
            const existsPost = yield postRepository.find({
                where: { user: { id: user.id, email: user.email }, id: id },
                relations: ["user"]
            });
            if (!existsPost || existsPost.length === 0) {
                throw new AppErros_1.AppError("post not foud");
            }
            yield postRepository.delete({ id });
        });
    }
}
exports.DeletePostService = DeletePostService;
