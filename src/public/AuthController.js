import { failed, success } from "../config/Responses";
import bcrypt from "bcrypt";
import UsersDao from "../dao/users/UsersDao";
import Auth from "../config/Auth";

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UsersDao.findByEmail(email);
  let isuser = await bcrypt.compare(
    (password || "") + "",
    (user?.password || "") + ""
  );
  if (isuser) {
    const token = Auth.create(user || "");
    res.cookie("access-token", token);
    success(res, { token });
  } else {
    return failed(res, {});
  }
};

export const register = async (req, res) => {
  let password = await bcrypt.hash(req.body.password + "", 10);
  let user = { ...req.body, password };
  user = await UsersDao.save(user);
  return success(res, user);
};

export const logout = (req, res) => {
  return success(res, req.body);
};

export const user = (req, res) => {
  return success(res, req.user);
};
