import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verify = async (req: any, res: Response, next: NextFunction) => {
  try {
    const payload = jwt.verify(req.params.accessToken, "Secret");
    req.user = payload;

    next();
  } catch (error: any) {
    console.log("ee", error.message);
    return res.status(200).json({ error: error.message });
    // throw error;
  }
};

export default { verify };
