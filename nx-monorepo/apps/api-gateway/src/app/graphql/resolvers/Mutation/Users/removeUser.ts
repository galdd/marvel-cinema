import UsersService from "#root/adapters/UsersService";

interface Args {
  password: string;
  email: string;
  isAdmin: boolean;
}

const removeUserResolver = async (
  obj: any,
  { password, email, isAdmin }: Args,
  context: any
) => {
  const userId = context.currentUser.user.id;
  // console.log(userId);

  return await UsersService.removeUser({ userId });
};

export default removeUserResolver;
