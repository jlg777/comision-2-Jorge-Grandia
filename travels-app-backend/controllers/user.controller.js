import { UserModel } from "../models/User.js";

export const ctrlCreateUser = async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Couldn't create user" });
  }
};
