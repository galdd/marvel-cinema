// export { default as orders } from "./Orders/getOrders";
//Auth service
export { default as currentUser } from './Users/currentUser';

//TicketService
export { default as Tickets } from '../Query/Tickets/getTicketsByShowId';
export { default as Ticket } from '../Query/Tickets/getTicketsById';
export { default as Shows } from '../Query/Tickets/getShows';
export { default as Show } from '../Query/Tickets/getShowById';
export { default as Movies } from '../Query/Tickets/getMovies';
export { default as Movie } from '../Query/Tickets/getMovieById';

//Order service
export { default as orders } from '../Query/Orders/getOrdersByid';
export { default as order } from '../Query/Orders/getOrder';
