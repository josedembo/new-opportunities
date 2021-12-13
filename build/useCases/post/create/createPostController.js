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
exports.CreatePostController = void 0;
const createPostService_1 = require("./createPostService");
class CreatePostController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, type, description } = request.body;
            const user = request.user;
            const service = new createPostService_1.CreatePostService();
            const post = yield service.execute({ title, type, description }, user);
            return response.status(201).json(post);
        });
    }
}
exports.CreatePostController = CreatePostController;
