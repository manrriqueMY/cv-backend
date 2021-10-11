import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema } = mongoose;

const users = new Schema(
  {
    email: String,
    password: String,
    name: String,
    image: String,
  },
  { timestamps: true }
);

users.plugin(mongoosePaginate);
const Users = mongoose.model("users", users);
export default Users;
