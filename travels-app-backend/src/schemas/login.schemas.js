import { body } from "express-validator";

export const createLoginSchema = [
  body("username").notEmpty().withMessage("User no debe estar vacio"),
  body("password").notEmpty().withMessage("Pass no debe estar vacio"),
  body("email").notEmpty().withMessage("Image no debe estar vacio"),
  body("avatarURL").notEmpty().withMessage("Image no debe estar vacio"),
];

export const LoginSchema = [
  body("email").notEmpty().withMessage("Image no debe estar vacio"),
  body("password").notEmpty().withMessage("Pass no debe estar vacio"),
];
