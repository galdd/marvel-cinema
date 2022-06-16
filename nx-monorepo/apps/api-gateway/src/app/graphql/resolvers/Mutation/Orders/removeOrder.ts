import OrdersService from "#root/adapters/OrdersService";
import { ResolverContext } from "#root/graphql/types";
interface Args {
  id: string;
}

const removeOrderResolver = async (
  obj: any,

  { id }: Args,
  context: any
) => {
  return await OrdersService.removeOrder({ id });
};

export default removeOrderResolver;

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
