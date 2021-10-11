import pkg from "jsonwebtoken";
import { failed } from "./Responses";

const { sign, verify } = pkg;

const create = (user) => {
  return sign({ user }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60,
  });
};

const validate = (req, res, next) => {
  const token = req.cookies["access-token"] || req.query.api_token;
  if (!token) {
    return failed(res, "Unauthenticated");
  }
  try {
    const validate = verify(token, process.env.JWT_SECRET);
    if (validate) {
      req.authenticated = true;
      req.user = validate.user;
      return next();
    }
  } catch (error) {
    return failed(res, "Unauthenticated");
  }
};

export default {
  create,
  validate,
};
