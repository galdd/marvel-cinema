import OrdersService from '#root/adapters/OrdersService';
import { ResolverContext } from '#root/graphql/types';
interface Args {
  userId: string;
  ticketId: Array<string>;
}

const createOrderResolver = async (
  obj: any,

  { ticketId }: Args,
  context: any,
) => {
  if (context.currentUser) {
    const userId = context.currentUser.user.id;
    console.log('t', userId);

    return await OrdersService.createOrder({
      userId,
      ticketId,
    });
  } else {
    throw 'user not valid';
  }
};

export default createOrderResolver;

// import OrdersService from "#root/adapters/OrdersService";

// interface Args {
//   userId: string;
//   ticketId: string;
//   status: string;
//   expiresAt: Date;
// }

// const signupResolver = async (
//   obj: any,
//   { userId, ticketId, status, expiresAt }: Args
// ) => {
//   return await OrdersService.createOrder({
//     userId,
//     ticketId,
//     status,
//     expiresAt,
//   });
// };

// export default signupResolver;
