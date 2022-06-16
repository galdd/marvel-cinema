import OrdersService from '#root/adapters/OrdersService';
import { ResolverContext } from '#root/graphql/types';
interface Args {
  userId: string;
  ticketId: string;
  status: string;
  expiresAt: Date;
}

const getOrdersByIdResolver = async (
  obj: any,

  {}: Args,
  context: any,
) => {
  // console.log('C', context);
  return await OrdersService.getOrdersByid({
    userId: context.currentUser.user.id,
  });
};

export default getOrdersByIdResolver;
