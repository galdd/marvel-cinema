import TicketsService from "#root/adapters/TicketsService";
import { ResolverContext } from "#root/graphql/types";
interface Args {
  showId: string;
}

const ticketResolver = async (obj: any, showId: Args) => {
  return await TicketsService.getTicketsByShowId(showId);
};

export default ticketResolver;
