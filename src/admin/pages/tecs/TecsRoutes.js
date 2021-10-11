import express from "express";
import { find, list, remove, save, update } from "./TecsControllers";

var TecsRoutes = express.Router();

TecsRoutes.get("/", list);
TecsRoutes.get("/:id", find);
TecsRoutes.put("/:id", update);
TecsRoutes.delete("/:id", remove);
TecsRoutes.post("/", save);

export default TecsRoutes;
