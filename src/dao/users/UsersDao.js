import Users from "./Users";

export const save = async ({ email, password, name, image }) => {
  let user = new Users({ email, password, name, image });
  await user.save();
  return user;
};

export const findByEmail = async (email) => await Users.findOne({ email });

export default {
  save,
  findByEmail,
};
