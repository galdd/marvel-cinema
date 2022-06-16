import TicketsService from '#root/adapters/TicketsService';

interface Args {
  ticketAmount: number;
  dateAndTIme: Date;
  price: number;
  moviedbApiId: string;
  movieId: string;
}

const createShowResolver = async (
  obj: any,
  { ticketAmount, dateAndTIme, price, moviedbApiId, movieId }: Args,
) => {
  return await TicketsService.createShow({
    ticketAmount,
    dateAndTIme,
    price,
    moviedbApiId,
    movieId,
  });
};

export default createShowResolver;
