import bcrypt from "bcrypt";

const hashPassword = (password: any) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export default hashPassword;
