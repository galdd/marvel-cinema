import TicketsService from "#root/adapters/TicketsService";

interface Args {
  id: string;
}

const removeShowResolver = async (obj: any, id: Args) => {
  return await TicketsService.removeShow(id);
};

export default removeShowResolver;
