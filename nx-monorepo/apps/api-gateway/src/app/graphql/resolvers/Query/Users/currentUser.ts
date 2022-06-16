import { ResolverContext } from "#root/graphql/types";

interface Args {
  me: boolean;
}

const currentUserResolver = async (
  obj: any,
  args: Args,
  context: ResolverContext
) => {
  console.log(context.res.locals);

  // if (args.me !== true) throw new Error("Unsupported argument value");
  return context.res.locals.currentUser;
};

export default currentUserResolver;
