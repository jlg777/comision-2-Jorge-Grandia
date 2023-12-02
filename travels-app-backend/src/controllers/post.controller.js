import { UserModel } from "../models/User.js";

export const ctrlListPosts = async (req, res) => {
    try {
      // Aquí puedes realizar alguna lógica para obtener la lista de publicaciones
      //console.log(res);
      const postlists = await UserModel.find();
      // Enviar la lista de publicaciones como respuesta
      res.status(200).json({postlists});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la lista de publicaciones' });
    }
  };
  