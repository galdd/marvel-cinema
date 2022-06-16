import UsersService from "#root/adapters/UsersService";
import { ResolverContext } from "#root/graphql/types";

interface Args {
  password: string;
  email: string;
}
//signin mutation
const signinResolver = async (
  obj: any,
  { password, email }: Args,
  context: ResolverContext
) => {
  const currentUser: any = await UsersService.signin({
    password,
    email,
  });

  // console.log("ttt", currentUser.user.accessToken);

  context.res.cookie("accessToken", currentUser.user.accessToken, {
    httpOnly: true,
    sameSite: "none",
    secure: true,
    maxAge: 1000 * 60 * 60 * 24,
  });
  // console.log("context.res.cookie#", context.res.cookie("currentUserId"));
  return currentUser;
};

export default signinResolver;
