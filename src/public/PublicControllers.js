import { success } from "../config/Responses";
import PostsDao from "../dao/posts/PostsDao";
import TecCatsDao from "../dao/teccats/TecCatsDao";
import TecsDao from "../dao/tecs/TecsDao";

export const postAll = async (req, res) => {
  const result = await PostsDao.list({ ...req.query });
  return success(res, result);
};
export const postFind = async (req, res) => {
  const result = await PostsDao.find(req.params.id);
  return success(res, result);
};

export const postFindByTecs = async (req, res) => {
  const result = await PostsDao.listByTec(req.params.id);
  return success(res, result);
};

export const tecsCatsAll = async (req, res) => {
  const result = await TecCatsDao.list({ ...req.query });
  return success(res, result);
};

export const tecsFind = async (req, res) => {
  const result = await TecsDao.list({ ...req.query });
  return success(res, result);
};
