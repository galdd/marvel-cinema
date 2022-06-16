import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../config/sequelize';
import { Ticket } from './Ticket';
import { v4 as uuidv4 } from 'uuid';

interface ShowAttributes {
  id: string;
  dateAndTIme: Date;
  ticketAmount: number;
  price: number;
  movieId: string;
  moviedbApiId: string;
}

export class Show extends Model<ShowAttributes> {
  public id!: number;
  public dateAndTIme!: Date;
  public price!: number;
  public moviedbApiId!: string;
  public movieId!: string;
  public ticketAmount!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public async initTickets(ticketAmount: number, showId: string): Promise<any> {
    for (let i = 1; i <= ticketAmount; i++) {
      const id = uuidv4();
      const seatId = i;
      const isTaken = false;
      await Ticket.create({ id, showId, seatId, isTaken });
    }
  }
}

Show.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    dateAndTIme: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    moviedbApiId: {
      type: DataTypes.STRING,
    },
    movieId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticketAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'show',
  },
);
