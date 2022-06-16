import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../config/sequelize';
import { v4 as uuidv4 } from 'uuid';

interface MovieAttributes {
  id: string;
  title: string;
  desc: string;
  img: string;
  imgTitle: string;
  imgSm: string;
  trailer: string;
  year: string;
  chronologicalOrder: number;
  length: string;
  moviedbApiId: string;
}

export class Movie extends Model<MovieAttributes> {
  public id!: number;
  public title: string;
  public desc: string;
  public img: string;
  public imgTitle: string;
  public imgSm: string;
  public trailer: string;
  public year: string;
  public chronologicalOrder: number;
  public length: string;
  public moviedbApiId: string;

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
    desc: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
    imgTitle: {
      type: DataTypes.STRING,
    },
    imgSm: {
      type: DataTypes.STRING,
    },
    trailer: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.STRING,
    },
    chronologicalOrder: {
      type: DataTypes.NUMBER,
    },
    length: {
      type: DataTypes.STRING,
    },
    moviedbApiId: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'movie',
  },
);

// Movie.init(
//   {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: UUIDV4,
//       allowNull: false,
//       primaryKey: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     desc: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     img: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     imgTitle: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     imgSm: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     trailer: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     year: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     moviedbApiId: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize: sequelize,
//     tableName: 'movie',
//   },
// );
