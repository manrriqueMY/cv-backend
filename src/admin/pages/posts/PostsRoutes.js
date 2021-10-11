import express from "express";
import { find, list, remove, save, update } from "./PostControllers";

var PostsRoutes = express.Router();

PostsRoutes.get("/", list);
PostsRoutes.get("/:id", find);
PostsRoutes.put("/:id", update);
PostsRoutes.delete("/:id", remove);
PostsRoutes.post("/", save);

export default PostsRoutes;
