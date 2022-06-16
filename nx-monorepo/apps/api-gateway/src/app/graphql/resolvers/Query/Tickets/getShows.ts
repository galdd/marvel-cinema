import TicketsService from "#root/adapters/TicketsService";
import { ResolverContext } from "#root/graphql/types";

const ticketResolver = async (obj: any) => {
  return await TicketsService.getShows();
};

export default ticketResolver;
