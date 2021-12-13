"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoutes = void 0;
const express_1 = require("express");
const userAuthentiation_1 = require("../middlewares/userAuthentiation");
const create_1 = require("../useCases/post/create");
const update_1 = require("../useCases/post/update");
const getAll_1 = require("../useCases/post/getAll");
const getMy_1 = require("../useCases/post/getMy");
const delete_1 = require("../useCases/post/delete");
const postRoutes = (0, express_1.Router)();
exports.postRoutes = postRoutes;
postRoutes.use(userAuthentiation_1.userAuthentication);
postRoutes.post("/", create_1.createPostController.handle);
postRoutes.put("/:id", update_1.updatePostController.handle);
postRoutes.get("/my", getMy_1.getMyPostsController.handle);
postRoutes.get("/", getAll_1.getAllPostsController.handle);
postRoutes.delete("/:id", delete_1.deletePostController.handle);
