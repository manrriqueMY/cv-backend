import TecCats from "./TecCats";

const list = async ({ page = 1, limit = 10 }) =>
  await TecCats.paginate({}, { limit, page, populate: ["tecs"] });
const find = async (id) => await TecCats.findById(id).populate(["tecs"]);
const update = async (id, data) =>
  await TecCats.findByIdAndUpdate(id, { ...data });
const remove = async (id) => await TecCats.findByIdAndDelete(id);
const save = async (data) => {
  var TecCats = new TecCats({ ...data });
  await TecCats.save();
  return TecCats;
};

export default {
  list,
  find,
  update,
  remove,
  save,
};
