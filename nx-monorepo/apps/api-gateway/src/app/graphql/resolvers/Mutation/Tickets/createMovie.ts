import TicketsService from '#root/adapters/TicketsService';

interface Args {
  title: string;
  desc: string;
  img: string;
  imgTitle: string;
  imgSm: string;
  trailer: string;
  year: string;
  chronologicalOrder: number;
  length: string;
  moviedbApiId: string;
}

const createShowResolver = async (
  obj: any,
  {
    title,
    desc,
    img,
    imgTitle,
    imgSm,
    trailer,
    year,
    chronologicalOrder,
    length,
    moviedbApiId,
  }: Args,
) => {
  return await TicketsService.createMovie({
    title,
    desc,
    img,
    imgTitle,
    imgSm,
    trailer,
    year,
    chronologicalOrder,
    length,
    moviedbApiId,
  });
};

export default createShowResolver;
