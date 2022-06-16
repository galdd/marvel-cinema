// GET ALL MOVIES
export const getTicketsStart = () => ({
  type: 'MOVIES_START',
});
export const getTicketsSuccess = (tickets: any) => ({
  type: 'MOVIES_SUCCESS',
  payload: tickets,
});
export const getTicketsFailure = () => ({
  type: 'MOVIES_FAILURE',
});

// GET SINGLE MOVIE

// DELETE A MOVIE
export const deleteTicketsStart = () => ({
  type: 'DELETE_MOVIES_START',
});
export const deleteTicketSuccess = (id: any) => ({
  type: 'DELETE_MOVIES_SUCCESS',
  payload: id,
});
export const deleteTicketsFailure = () => ({
  type: 'DELETE_MOVIES_FAILURE',
});

// UPDATE A MOVIE
export const updateTicketsStart = () => ({
  type: 'UPDATE_MOVIES_START',
});
export const updateTicketSuccess = (updatedTicket: any) => ({
  type: 'UPDATE_MOVIES_SUCCESS',
  payload: updatedTicket,
});
export const updateTicketsFailure = () => ({
  type: 'UPDATE_MOVIES_FAILURE',
});

// CREATE A MOVIE
export const createTicketsStart = () => ({
  type: 'CREATE_MOVIES_START',
});
export const createTicketSuccess = (newTicket: any) => ({
  type: 'CREATE_MOVIES_SUCCESS',
  payload: newTicket,
});
export const createTicketsFailure = () => ({
  type: 'CREATE_MOVIES_FAILURE',
});
