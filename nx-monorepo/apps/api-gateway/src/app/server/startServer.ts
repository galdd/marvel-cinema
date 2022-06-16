import config from 'config';
import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import resolvers from '#root/graphql/resolvers';
import schema from '#root/graphql';

import formatGraphQLErrors from './formatGraphQLErrors';
import injectSession from './middleware/injectSession';

const PORT = <number>config.get('PORT');

const startServer = async () => {
  const apolloServer = new ApolloServer({
    context: (ctx) => ({
      ...ctx,
      currentUser: ctx.res.locals.currentUser,
    }),
    formatError: formatGraphQLErrors,
    resolvers,
    typeDefs: schema,
  });

  const app = express();
  // app.use(morgan("dev"));
  app.use(cookieParser());
  // app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(
    cors({
      credentials: true,
      origin: (origin, cb) => cb(null, true),
    })
  );

  app.use(injectSession);

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: ['http://localhost:4200', 'https://studio.apollographql.com'],
    },
    path: '/graphql',
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.info(`API gateway listening on ${PORT}`);
  });
};

export default startServer;
