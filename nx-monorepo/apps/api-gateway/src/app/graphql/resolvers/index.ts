import * as Mutation from './Mutation';
import * as Query from './Query';
import Order from './orderResolver';
import Show from './showResolver';
import Ticket from './ticketResolver';
// import UserSession from "./UserSession";

// const resolvers = { Mutation, Query, UserSession };
const resolvers = { Mutation, Query, Order, Show, Ticket };
// const resolvers = { Mutation, Query };

export default resolvers;
