import express from "express";
import { save } from "./UploadControllers";

var UploadRoutes = express.Router();

UploadRoutes.post("/", save);

export default UploadRoutes;
