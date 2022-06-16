import { Request, Response, NextFunction } from "express";

export const signout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("b", req.cookies);

    res.clearCookie("ACCESS_TOKEN");

    next();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default { signout };
