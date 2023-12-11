import { CommentModel } from "../models/CommentModel.js";
import { PostModel } from "../models/PostModel.js";
import { UserModel } from "../models/User.js";

export const ctrlListPosts = async (req, res) => {
  try {
    // Aquí puedes realizar alguna lógica para obtener la lista de publicaciones
    //console.log(res);
    const postlists = await PostModel.find();
    // Enviar la lista de publicaciones como respuesta
    res.status(200).json(postlists);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al obtener la lista de publicaciones" });
  }
};

export const ctrlCreatePost = async (req, res) => {
  //const userName = "Jonh Doe";
  //const userId = req.user._id;
  //console.log(postlists);
  try {
    const { title, description, imageURL, autor } = req.body;

    const postlist = new PostModel({
      title,
      description,
      autor,
      imageURL,
      //username: userName,
    });

    await postlist.save();

    return res.status(201).json(postlist);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlDeletePost = async (req, res) => {
  // const userId = req.user._id;
  const { postlistId } = req.params;
  console.log(req.params);
  console.log(postlistId);
  try {
    const postlist = await PostModel.findOne({
      _id: postlistId,
      // author: userId,
    });

    if (!postlist) {
      return res.status(404).json({ error: "Playlist not found" });
    }

    //await MusicModel.deleteMany({ _id: { $in: playlist.musics } });

    await PostModel.findOneAndDelete({
      _id: postlistId,
    });

    return res.status(200).json(postlist);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlGetPost = async (req, res) => {
  const { postlistId } = req.params;
  //const userId = req.user._id;

  try {
    const postlist = await PostModel.findOne({
      _id: postlistId,
      // autor: userId,
    }).populate("autor", ["username"]);
     // .populate("comments", ["description"]);

    if (!postlist) {
      return res.status(404).json({ error: "Postlist not found" });
    }

    // Aquí puedes agregar lógica para obtener comentarios asociados al postlist
    const comments = await CommentModel.find();

    // Agrega los comentarios al objeto postlist
    postlist.comments = comments;

    return res.status(200).json(postlist);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
