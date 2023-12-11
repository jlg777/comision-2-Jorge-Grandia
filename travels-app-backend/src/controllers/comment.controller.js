import { CommentModel } from "../models/CommentModel.js";

export const ctrlCreateComment = async (req, res) => {
  const { description } = req.body;
  try {
    const comment = new CommentModel({
      description,
    });
    await comment.save();

    return res.status(201).json(comment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
