import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../config/sequelize';

interface MovieAttributes {
  id: string;
  title: string;
}

export class Movie extends Model<MovieAttributes> {
  public id!: number;
  public title!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Movie.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'movie',
  },
);
