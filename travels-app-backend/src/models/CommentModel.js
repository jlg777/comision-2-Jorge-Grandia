import { model } from "mongoose";
import { Schema } from "mongoose";

const Postchema = new Schema(
  {
    autor: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const PostModel = model("Post", Postchema);
