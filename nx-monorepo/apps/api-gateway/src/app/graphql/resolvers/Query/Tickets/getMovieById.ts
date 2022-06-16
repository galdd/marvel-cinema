import TicketsService from '#root/adapters/TicketsService';
import { ResolverContext } from '#root/graphql/types';

interface Args {
  id: string;
}

const movieResolver = async (obj: any, id: Args) => {
  return await TicketsService.getMovie(id);
};

export default movieResolver;
