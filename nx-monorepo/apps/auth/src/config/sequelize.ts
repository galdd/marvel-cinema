import { Sequelize } from "sequelize";

const sequelize = new Sequelize("app", "", "", {
  storage: "./database.sqlite",
  dialect: "sqlite",
  logging: false,
});

export default sequelize;
