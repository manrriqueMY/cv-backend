import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema } = mongoose;

const tecCats = new Schema(
  {
    title: String,
    description: String,
    image: String,
    tecs: [{ type: Schema.Types.ObjectId, ref: "Tecs" }],
  },
  { timestamps: true }
);

tecCats.plugin(mongoosePaginate);
const TecCats = mongoose.model("TecCats", tecCats);
export default TecCats;
