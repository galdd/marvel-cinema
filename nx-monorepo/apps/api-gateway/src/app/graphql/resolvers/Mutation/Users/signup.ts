import UsersService from '#root/adapters/UsersService';
import { ResolverContext } from '#root/graphql/types';

interface Args {
  password: string;
  email: string;
}

const signupResolver = async (
  obj: any,
  { password, email }: Args,
  context: ResolverContext,
) => {
  const currentUser: any = await UsersService.signup({
    password,
    email,
  });

  // console.log("ttt", currentUser.user.accessToken);

  context.res.cookie('accessToken', currentUser.user.accessToken, {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    maxAge: 1000 * 60 * 60 * 24,
  });
  return currentUser;
};

export default signupResolver;
