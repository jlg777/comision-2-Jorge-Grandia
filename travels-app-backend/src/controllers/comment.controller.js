import { CommentModel } from "../models/CommentModel.js";
import { PostModel } from "../models/PostModel.js";

export const ctrlCreateComment = async (req, res) => {
  const { autor, description } = req.body;
  const { postId } = req.params;
  try {
    const comment = new CommentModel({
      autor,
      description,
      postId,
    });

    await PostModel.findOneAndUpdate(
      { _id: postId },
      { $push: { comments: comment._id } }
    );

    await comment.save();

    return res.status(201).json(comment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
