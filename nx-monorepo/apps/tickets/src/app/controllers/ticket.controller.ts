import { Request, Response, NextFunction } from 'express';
import { Ticket } from '../model/Ticket';
import { v4 as uuidv4 } from 'uuid';
import hashPassword from '../utils/hashPassword';
import { Op } from 'sequelize';
import sequelize from '../config/sequelize';
import { Transaction } from 'sequelize';

const getTickets = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tickets = await Ticket.findAll();

    // get some Tickets
    return res.status(200).json({
      tickets,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getTicketsByShowId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // console.log('tas', req.params);

    const { showId } = req.params;
    const tickets = await Ticket.findAndCountAll({
      where: {
        showId: {
          [Op.like]: showId,
        },
      },
    });
    // console.log('t', tickets);

    // get some Tickets
    return res.status(200).json({
      tickets,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getTicket = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    console.log('tt', ticket);

    // get some Tickets
    return res.status(200).json({
      ticket,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// adding a Ticket
const setTicket = async (req: Request, res: Response, next: NextFunction) => {
  let error = false;
  let message = '';

  try {
    const { ids } = req.body;

    console.log(ids, Array.isArray(ids));

    if (Array.isArray(ids)) {
      for (const id of ids) {
        const result = await sequelize.transaction(async (t) => {
          const ticket: any = await Ticket.findByPk(id, {
            transaction: t,
          });
          if (!ticket) {
            error = true;
            message = 'ticket not exist';
          } else {
            if (ticket.isTaken) {
              error = true;
              message = 'The ticket is taken';
              return await ticket.save({ transaction: t });
            } else {
              ticket.isTaken = true;
              error = false;
              message = 'The ticket is set';
              return await ticket.save({ transaction: t });
            }
          }
        });
      }
    } else {
      const result = await sequelize.transaction(async (t) => {
        const ticket: any = await Ticket.findByPk(ids, {
          transaction: t,
        });
        if (!ticket) {
          error = true;
          message = 'ticket not exist';
        } else {
          if (ticket.isTaken) {
            error = true;
            message = 'The ticket is taken';
            return await ticket.save({ transaction: t });
          } else {
            ticket.isTaken = true;
            error = false;
            message = 'The ticket is set';
            return await ticket.save({ transaction: t });
          }
        }
      });
    }

    return res.status(200).json({
      error,
      message,
    });
  } catch (error) {
    console.log('e', error);
    return res.status(200).json({
      test: 't',
    });
    // throw error;
  }

  // return response
};

const cancelTicket = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let error = false;
  let message = '';

  try {
    const { id } = req.body;
    const result = await sequelize.transaction(async (t) => {
      const ticket: any = await Ticket.findByPk(id, {
        transaction: t,
      });
      if (!ticket) {
        error = true;
        message = 'ticket not exist';
      } else {
        if (!ticket.isTaken) {
          error = true;
          message = 'The ticket is already free';
          return await ticket.save({ transaction: t });
        } else {
          ticket.isTaken = false;
          error = false;
          message = 'The ticket is free';
          return await ticket.save({ transaction: t });
        }
      }
    });

    return res.status(200).json({
      error,
      message,
    });
  } catch (error) {
    console.log('e', error);
    return res.status(200).json({
      test: 't',
    });
    // throw error;
  }

  // return response
};

const updateTicket = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (ticket) {
      await ticket.update(req.body).then(function () {
        return res.status(200).json({
          message: 'Movie Updated.',
        });
      });
    } else {
      res.send({ message: 'Movie not exists' });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getTickets,
  getTicket,
  setTicket,
  cancelTicket,
  getTicketsByShowId,
  updateTicket,
};
// export default { getTickets, getTicket, updateTicket, deleteTicket, addTicket };

// return res.status(200).json({
//   ticket,
// });
// const setTicket = async (req: Request, res: Response, next: NextFunction) => {
//   try {

//     const { id, isTaken } = req.body;
//     const ticket: any = await Ticket.findByPk(id);

//     ticket.isTaken = isTaken;
//     await ticket.save();

//     return res.status(200).json({
//       ticket,
//     });
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }

//   // return response
// };
