import Posts from "./Posts";

const list = async ({ page = 1, limit = 10 }) =>
  await Posts.paginate({}, { limit, page, populate: ["tecs"] });
const find = async (id) => await Posts.findById(id).populate("tecs");
const update = async (id, data) =>
  await Posts.findByIdAndUpdate(id, { ...data });
const remove = async (id) => await Posts.findByIdAndDelete(id);
const save = async (data) => {
  var Posts = new Posts({ ...data });
  await Posts.save();
  return Posts;
};

const listByTec = async (tec, page) =>
  await Posts.paginate(
    { tecs: { $in: tec } },
    { limit: 10, page, populate: ["tecs"] }
  );

export default {
  listByTec,
  list,
  find,
  update,
  remove,
  save,
};
