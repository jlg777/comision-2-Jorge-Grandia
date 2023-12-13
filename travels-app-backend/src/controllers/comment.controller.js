import { CommentModel } from "../models/CommentModel.js";
import { PostModel } from "../models/PostModel.js";

export const ctrlCreateComment = async (req, res) => {
  try {
    const { autor, description } = req.body;
    console.log(description);
    const { postId } = req.params;
    const comment = new CommentModel({
      autor,
      description,
      postId: postId, // Utiliza el postId recibido en los parámetros
    });

    await comment.save();
    console.log(comment);
    return res.status(201).json(comment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
