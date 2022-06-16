import axios from 'axios';

import {
  getTicketsStart,
  getTicketsFailure,
  getTicketsSuccess,
  deleteTicketsStart,
  deleteTicketSuccess,
  deleteTicketsFailure,
  updateTicketsStart,
  updateTicketSuccess,
  updateTicketsFailure,
  createTicketsStart,
  createTicketSuccess,
  createTicketsFailure,
} from './TicketActions';

export const getTickets = async (dispatch: any) => {
  dispatch(getTicketsStart());
  try {
    const res = await axios.get('http://localhost:7002/ticket');
    console.log('resTickets', res.data.tickets);

    dispatch(getTicketsSuccess(res.data.tickets));
  } catch (err) {
    console.log(err);
    dispatch(getTicketsFailure());
  }
};

export const deleteTicket = async (id: any, dispatch: any) => {
  dispatch(deleteTicketsStart());
  try {
    await axios.delete(`http://localhost:7002/ticket/${id}`);
    dispatch(deleteTicketSuccess(id));
  } catch (err) {
    console.log(err);
    dispatch(deleteTicketsFailure());
  }
};
export const updateTicket = async (id: any, ticket: any, dispatch: any) => {
  dispatch(updateTicketsStart());
  try {
    const res = await axios.put(`http://localhost:7002/ticket/${id}`, ticket);
    console.log('resb', res);

    dispatch(updateTicketSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(updateTicketsFailure());
  }
};

// CREATE
export const createTicket = async (ticket: any, dispatch: any) => {
  dispatch(createTicketsStart());
  try {
    const res = await axios.post(`http://localhost:7002/ticket`, ticket);

    dispatch(createTicketSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(createTicketsFailure());
  }
};
