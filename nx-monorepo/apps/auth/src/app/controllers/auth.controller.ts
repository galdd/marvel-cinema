import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../model/User";
import { v4 as uuidv4 } from "uuid";
import { JWTgenerateToken } from "../utils/jwt.utils";
import request from "supertest";

interface UserPayload {
  id: string;
  email: string;
}

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const id = uuidv4().toString();
    const isAdmin = false;
    const newUser = await User.create({
      id,
      email,
      password,
      isAdmin,
    });
    const accessToken = JWTgenerateToken(
      newUser.id.toString(),
      newUser.email,
      isAdmin
    );

    const payload = jwt.verify(accessToken, "Secret");

    res
      .cookie("ACCESS_TOKEN", accessToken)
      .status(200)
      .json({ user: payload || null });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const signin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user: User | null = await User.findOne({ where: { email: email } });
    if (user != null && (await user.verifyPassword(password))) {
      console.log(user.isAdmin);

      const accessToken = JWTgenerateToken(
        user.id.toString(),
        user.email,
        user.isAdmin
      );
      const payload: any = jwt.verify(accessToken, "Secret");
      payload["accessToken"] = accessToken;
      res
        .cookie("ACCESS_TOKEN", accessToken)
        .status(200)
        .json({ user: payload || null });
    } else {
      return res
        .status(400)
        .json({ message: "The username or password is incorrect" });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const signout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await console.log("a", req.cookies);

    res.send({});
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const validationToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findByPk(req.params.userId);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const currentUser = async (req: any, res: Response, next: NextFunction) => {
  try {
    res.send({ user: req.user || null });
  } catch (err: any) {
    if (err.message.trim() === "invalid signature".trim()) {
      return res.status(400).json({ message: "invalid signature" });
    }
    console.log("er", err);
    return res.status(200).json({ message: "some problem" });
  }
};

export default {
  signin,
  signout,
  currentUser,
  // currentToken,
  signup,
  validationToken,
};

//FIXME
// const payload = jwt.verify(req.cookies["ACCESS_TOKEN"], "Secret");

//FIXME
// console.log("er", err);
// return res.status(500).json({ message: "some problem" });
// // throw err;

//draft
// const currentToken = async (req: any, res: Response, next: NextFunction) => {
//   // if (!req.session?.jwt) {
//   //   return next();
//   // }

//   try {
//     console.log(req.cookies);
//     const payload = jwt.verify(req.cookies["ACCESS_TOKEN"], "Secret");
//     req.user = payload;
//     // console.log(req.user);
//     res.send({ user: req.user || null });

//     // res
//     // .cookie("ACCESS_TOKEN", accessToken)
//     // .status(200)
//     // .json({ user: payload || null });
//   } catch (err: any) {
//     if (err.message.trim() === "invalid signature".trim()) {
//       return res.status(400).json({ message: "invalid signature" });
//     }
//     console.log(err);
//     return res.status(500).json({ message: "some problem" });
//     throw err;
//   }
// };
