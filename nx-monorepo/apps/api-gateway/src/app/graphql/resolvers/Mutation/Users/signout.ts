import UsersService from '#root/adapters/UsersService';
import { ResolverContext } from '#root/graphql/types';

interface Args {
  me: boolean;
}

const signoutResolver = async (
  obj: any,
  args: Args,
  context: ResolverContext,
) => {
  await UsersService.signout();

  // console.log(args);

  // if (args.me !== true) throw new Error('Unsupported argument value');

  const sessionId = context.res.locals.currentUser.id;

  context.res.clearCookie('accessToken');

  return true;
};

export default signoutResolver;
