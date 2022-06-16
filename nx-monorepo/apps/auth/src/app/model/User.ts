import { DataTypes, Model, UUIDV4 } from "sequelize";
import sequelize from "../config/sequelize";
import bcrypt from "bcrypt";

interface UserAttributes {
  id: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export class User extends Model<UserAttributes> {
  public static async generateHash(password: string): Promise<string> {
    return await bcrypt.hash(password, bcrypt.genSaltSync(12));
  }
  public id!: number;
  public email!: string;
  public password!: string;
  public isAdmin!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public async verifyPassword(password: string): Promise<boolean> {
    return await bcrypt.compareSync(password, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: "users",
  }
);

User.beforeCreate(async (user, options) => {
  const hashedPassword = await User.generateHash(user.password);
  user.password = hashedPassword;
});
//
User.beforeUpdate(async (user: any) => {
  const hashedPassword = user.password
    ? await User.generateHash(user.password)
    : user.previous("password");
  user.password = hashedPassword;
});

//FIXME:   user: any
// User.beforeUpdate(async (user) => {
//   const hashedPassword = user.password ? await User.generateHash(user.password) : user.previous("password");
//   user.password = hashedPassword;
// });
