import { failed, success } from "../../../config/Responses";
import TecCatsDao from "../../../dao/teccats/TecCatsDao";

export const list = async (req, res) => {
  try {
    const { page, limit } = req.query;
    var result = await TecCatsDao.list({ page, limit });
    return success(res, result);
  } catch (error) {
    return failed(res, error);
  }
};
export const find = async (req, res) => {
  try {
    const { id } = req.params;
    var result = await TecCatsDao.find(id);
    return success(res, result);
  } catch (error) {
    return failed(res, error);
  }
};
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    var result = await TecCatsDao.update(id, { ...res.body });
    return success(res, result);
  } catch (error) {
    return failed(res, error);
  }
};
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    var result = await TecCatsDao.remove(id);
    return success(res, result);
  } catch (error) {
    return failed(res, error);
  }
};
export const save = async (req, res) => {
  try {
    var result = await TecCatsDao.save(req.body);
    return success(res, result);
  } catch (error) {
    return failed(res, error);
  }
};
