import TicketsService from "#root/adapters/TicketsService";
import { ResolverContext } from "#root/graphql/types";

interface Args {
  id: string;
}

const ticketResolver = async (obj: any, id: Args) => {
  return await TicketsService.getShow(id);
};

export default ticketResolver;
