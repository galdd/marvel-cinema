import { check, body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { User } from "../../model/User";

const signup = [
  body("email").isEmail().withMessage("Email must be valid"),
  body("password")
    .trim()
    .isLength({ min: 6, max: 20 })
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[0-9A-Za-z.\s_-]+$/)
    .withMessage(
      "Password must be between 6 and 20 characters, at least one uppercase letter, one lowercase letter and one numbers "
    ),
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log("###", req.body);

    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "email can't be blank" });
    }
    if (!password) {
      return res.status(400).json({ message: "password can't be blank" });
    }
    const user: User | null = await User.findOne({ where: { email: email } });
    if (user) {
      return res.status(400).json({ message: "email taken" });
    }
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

const signinUser = [
  body("email").isEmail().withMessage("Email must be valid"),
  body("password")
    .trim()
    .isLength({ min: 6, max: 20 })
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[0-9A-Za-z.\s_-]+$/)
    .withMessage("You must supply a password"),
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log("###", req.body);

    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "email can't be blank" });
    }
    if (!password) {
      return res.status(400).json({ message: "password can't be blank" });
    }
    const user: User | null = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(400).json({ message: "email not exists" });
    }
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

export default { signup, signinUser };

// ^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[0-9A-Za-z.\s_-]+$ allow at least one uppercase letter, one lowercase letter and one numbers and underline
// ^(?=.*[A-Z])[A-Za-z.\s_-]+$ lower case uppercase and underline
// .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/)
// .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/) lowercase,uppercase and numbers
// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
