import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import PublicRoutes from "./public/PublicRoutes";
import AdminRoutes from "./admin/AdminRoutes";
import cookie from "cookie-parser";
import Auth from "./config/Auth";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

mongoose.connect(process.env.MONGODB_URI);

const app = express();
const PORT = process.env.PORT || 3500;
app.use(express.json());
app.use(cookie());
app.use(cors());

app.use("/v1/", PublicRoutes);
app.use("/v1/admin", Auth.validate, AdminRoutes);
app.use("/", (req, res) => res.send("Web is down"));

app.listen(PORT, () => {
  console.log("run:" + PORT);
});
