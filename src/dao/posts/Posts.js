import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema } = mongoose;

const posts = new Schema(
  {
    title: String,
    description: String,
    image: String,
    tecs: [{ type: Schema.Types.ObjectId, ref: "Tecs" }],
    repository: String,
    video: String,
  },
  { timestamps: true }
);

posts.plugin(mongoosePaginate);
const Posts = mongoose.model("Posts", posts);
export default Posts;
