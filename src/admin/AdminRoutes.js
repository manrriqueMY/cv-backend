import express from "express";
import TecCatsRoutes from "./pages/teccats/TecCatsRoutes";
import TecsRoutes from "./pages/tecs/TecsRoutes";
import PostsRoutes from "./pages/posts/PostsRoutes";
import UploadRoutes from "./pages/upload/UploadRoutes";
import { user } from "../public/AuthController";

var AdminRoutes = express.Router();

AdminRoutes.post("/user", user);
AdminRoutes.use("/tecs", TecsRoutes);
AdminRoutes.use("/teccats", TecCatsRoutes);
AdminRoutes.use("/posts", PostsRoutes);
AdminRoutes.use("/uploads", UploadRoutes);

export default AdminRoutes;
