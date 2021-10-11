import express from "express";
import { login, logout, register } from "./AuthController";
import {
  postAll,
  postFind,
  postFindByTecs,
  tecsCatsAll,
  tecsFind,
} from "./PublicControllers";

var PublicRoutes = express.Router();

PublicRoutes.post("/login", login);
PublicRoutes.post("/register", register);
PublicRoutes.post("/logout", logout);

PublicRoutes.get("/posts", postAll);
PublicRoutes.get("/posts/:id", postFind);
PublicRoutes.get("/posts/tecs/:id", postFindByTecs);
PublicRoutes.get("/teccats", tecsCatsAll);
PublicRoutes.get("/tecs/:id", tecsFind);

export default PublicRoutes;
