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

  try {
    const { title } = req.body;

    const postlist = new PostModel({
      title,
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

  try {
    const playlist = await PostModel.findOne({
      _id: postlistId,
    });
    //.populate("author", ["username", "avatar"])
    //.populate("musics", ["name", "artist", "year"]);

    if (!playlist) {
      return res.status(404).json({ error: "Playlist not found" });
    }

    return res.status(200).json(playlist);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
