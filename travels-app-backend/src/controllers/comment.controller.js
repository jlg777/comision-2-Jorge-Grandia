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

export const ctrlDeleteComment = async (req, res) => {
  const { commentId } = req.params;

    console.log(commentId);
  try {
    
    // Verifica si commentId está presente
    if (!commentId) {
      return res
        .status(400)
        .json({ error: "Se requiere un ID de comentario válido" });
    }

    await PostModel.findOneAndDelete({
      _id: commentId,
    });
      
 

 
    return res.status(200).json("ok");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
