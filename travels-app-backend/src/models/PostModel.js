import { Schema } from "mongoose";
import { model } from "mongoose";

const Postchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comments',
      },
    ],
    /*username: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },*/
  }, {
    timestamps: true,
    versionKey: false,
  });
  
  export const PostModel = model('Post', Postchema);