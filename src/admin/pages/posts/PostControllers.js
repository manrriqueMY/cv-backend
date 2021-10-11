import { failed, success } from "../../../config/Responses";
import PostDao from "../../../dao/posts/PostsDao";

export const list = async (req, res) => {
  try {
    const { page, limit } = req.query;
    var result = await PostDao.list({ page, limit });
    return success(res, result);
  } catch (error) {
    return failed(res, error);
  }
};
export const find = async (req, res) => {
  try {
    const { id } = req.params;
    var result = await PostDao.find(id);
    return success(res, result);
  } catch (error) {
    return failed(res, error);
  }
};
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    var result = await PostDao.update(id, { ...res.body });
    return success(res, result);
  } catch (error) {
    return failed(res, error);
  }
};
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    var result = await PostDao.remove(id);
    return success(res, result);
  } catch (error) {
    return failed(res, error);
  }
};
export const save = async (req, res) => {
  try {
    var result = await PostDao.save(req.body);
    return success(res, result);
  } catch (error) {
    return failed(res, error);
  }
};
