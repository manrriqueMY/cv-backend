import express from "express";
import { find, list, remove, save, update } from "./TecCatsControllers";

var TecCatsRoutes = express.Router();

TecCatsRoutes.get("/", list);
TecCatsRoutes.get("/:id", find);
TecCatsRoutes.put("/:id", update);
TecCatsRoutes.delete("/:id", remove);
TecCatsRoutes.post("/", save);

export default TecCatsRoutes;
