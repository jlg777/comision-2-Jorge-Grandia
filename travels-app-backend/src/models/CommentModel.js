import { model } from "mongoose";
import { Schema } from "mongoose";

const Commentchema = new Schema(
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

export const CommentModel = model("Comment", Commentchema);
