import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../config/sequelize';

interface TicketAttributes {
  id: string;
  showId: string;
  seatId: number;
  isTaken: boolean;
}

export class Ticket extends Model<TicketAttributes> {
  public id!: number;
  public showId!: string;

  public seatId!: number;

  public isTaken!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Ticket.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    showId: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    seatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    isTaken: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'ticket',
  },
);
