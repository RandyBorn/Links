import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const book = mongoose.model("Book", BookSchema);

export default book;
