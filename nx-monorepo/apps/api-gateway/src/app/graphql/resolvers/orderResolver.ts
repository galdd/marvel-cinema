import TicketsService from '#root/adapters/TicketsService';
import { ResolverContext } from '#root/graphql/types';
interface Args {
  ticketId: string;
}

import config from 'config';
import got from 'got';

const TICKETS_SERVICE_URI = <string>config.get('TICKETS_SERVICE_URI');

export interface Ticket {
  id: string;
  showId: string;
  dateAndTIme: Date;
  price: number;
}

const orderResolver = {
  ticket: async (args: Args) => {
    // let id: any = args.ticketId;
    let ids: any = args.ticketId;
    console.log('a', ids);
    let tickets = [];
    for (const id of ids) {
      const body: any = await got
        .get(`${TICKETS_SERVICE_URI}/ticket/${id}`)
        .json();
      if (!body) return null;
      tickets.push(body.ticket);
    }

    // if (!body) return null;
    // let ticket = Object.assign(body.ticket);
    // console.log('a', body.ticket);
    // ticket.ticketId = await ticket.ticketId.split(',');
    console.log('b', tickets);
    return tickets;
  },
};

// const ticketResolver = {
//   ticket: async (args: Args) => {
//     // console.log("ttt", currentUser.user.accessToken);
//     // console.log("aab", args.ticketId);

//     let id: any = args.ticketId;
//     console.log("a", id);
//     return TicketsService.getTicket(id);
//   },
// };

export default orderResolver;
