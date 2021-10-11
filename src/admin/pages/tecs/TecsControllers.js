import { failed, success } from "../../../config/Responses";
import TecsDao from "../../../dao/tecs/TecsDao";

export const list = async (req, res) => {
  try {
    const { page, limit } = req.query;
    var result = await TecsDao.list({ page, limit });
    return success(res, result);
  } catch (error) {
    return failed(res, error);
  }
};
export const find = async (req, res) => {
  try {
    const { id } = req.params;
    var result = await TecsDao.find(id);
    return success(res, result);
  } catch (error) {
    return failed(res, error);
  }
};
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    var result = await TecsDao.update(id, { ...res.body });
    return success(res, result);
  } catch (error) {
    return failed(res, error);
  }
};
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    var result = await TecsDao.remove(id);
    return success(res, result);
  } catch (error) {
    return failed(res, error);
  }
};
export const save = async (req, res) => {
  try {
    var result = await TecsDao.save(req.body);
    return success(res, result);
  } catch (error) {
    return failed(res, error);
  }
};
