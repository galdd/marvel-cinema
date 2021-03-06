import TicketsService from "#root/adapters/TicketsService";

interface Args {
  ticketAmount: number;
  dateAndTIme: Date;
  price: number;
  imdbApiId: string;
}

const createShowResolver = async (
  obj: any,
  { ticketAmount, dateAndTIme, price, imdbApiId }: Args
) => {
  return await TicketsService.createShow({
    ticketAmount,
    dateAndTIme,
    price,
    imdbApiId,
  });
};

export default createShowResolver;
