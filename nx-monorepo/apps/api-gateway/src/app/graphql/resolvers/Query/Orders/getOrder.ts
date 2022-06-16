import OrdersService from '#root/adapters/OrdersService';
import { ResolverContext } from '#root/graphql/types';
interface Args {
  id: string;
}

const getOrderResolver = async (obj: any, id: Args) => {
  return await OrdersService.getOrder(id);
};

export default getOrderResolver;
