import Tecs from "./Tecs";

const list = async ({ page = 1, limit = 10 }) =>
  await Tecs.paginate({}, { limit, page });
const find = async (id) => await Tecs.findById(id).populate(["teccats"]);
const update = async (id, data) =>
  await Tecs.findByIdAndUpdate(id, { ...data });
const remove = async (id) => await Tecs.findByIdAndDelete(id);
const save = async (data) => {
  var tecs = new Tecs({ ...data });
  await tecs.save();
  return tecs;
};

export default {
  list,
  find,
  update,
  remove,
  save,
};
