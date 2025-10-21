import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    content: {
      type: String,
      require: [true, "내용은 필수입니다"],
    },
    author: {
      type: String,
      default: "Anonymous",
    },
  },
  {
    timestamps: true, // createAt, updateAt 자동 생성    (추가된 시간, 수정된 시간...)
  }
);

export default mongoose.model("Post", postSchema);
