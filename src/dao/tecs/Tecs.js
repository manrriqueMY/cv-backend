import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema } = mongoose;

const tecs = new Schema(
  {
    title: String,
    description: String,
    image: String,
    teccats: { type: Schema.Types.ObjectId, ref: "TecCats" },
  },
  { timestamps: true }
);

tecs.plugin(mongoosePaginate);
const Tecs = mongoose.model("Tecs", tecs);
export default Tecs;
