import TicketsService from '#root/adapters/TicketsService';
import { ResolverContext } from '#root/graphql/types';
import config from 'config';
import got from 'got';
const TICKETS_SERVICE_URI = <string>config.get('TICKETS_SERVICE_URI');

interface Args {
  id: string;
}

export interface Show {
  dateAndTIme: Date;
  price: number;
  moviedbApiId: string;
  ticketAmount: number;
}

export interface Show {
  id: string;
  showId: string;
  dateAndTIme: Date;
  price: number;
  movieId: string;
}

const showResolver = {
  movie: async (args: Show) => {
    let id: any = args.movieId;
    console.log('showResolver movie', id);

    // const body: any = await got
    //   .get(`${TICKETS_SERVICE_URI}/ticket/${id}`)
    //   .json();
    const body: any = await got
      .get(`${TICKETS_SERVICE_URI}/movie/${id}`)
      .json();
    if (!body) return null;

    console.log('bbbbbbbbbbb', body);
    return <Show>body.movie;
  },
  isSoldOut: async (args: Args) => {
    const { id } = args;
    console.log('a', id);

    const tickets: any = await TicketsService.getTicketsByShowId({
      showId: id,
    });
    let isSoldOut = true;
    if (tickets) {
      tickets.map((ticket: any) => {
        console.log(ticket);

        if (!ticket.isTaken) {
          isSoldOut = false;
        }
      });
    }

    return isSoldOut;
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

export default showResolver;
