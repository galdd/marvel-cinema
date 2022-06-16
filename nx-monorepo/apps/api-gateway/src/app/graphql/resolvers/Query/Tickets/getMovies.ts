import TicketsService from '#root/adapters/TicketsService';
import { ResolverContext } from '#root/graphql/types';

const movieResolver = async (obj: any) => {
  return await TicketsService.getMovies();
};

export default movieResolver;
