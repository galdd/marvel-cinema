import db from './config/sequelize';
import express from 'express';
import adminRouter from './routes/user.route';
import authRouter from './routes/auth.route';
// import cors from "cors";
import morgan from 'morgan';
import 'dotenv/config';
import session from 'cookie-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
//FIXME
// declare let process: {
//   env: any;
// };

db.sync().then(() => {
  // console.log("connect to db");
});

const app = express();
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:7001", //(Whatever your frontend url is)
//     credentials: true, // <= Accept credentials (cookies) sent by the client
//   })
// );

app.use(cookieParser());
app.use(
  session({
    keys: [
      process.env.ACCESS_TOKEN_SECRET as string,
      process.env.REFRESH_TOKEN_SECRET as string,
    ],
    httpOnly: false,
    secure: false,
    maxAge: 300000,
  }),
);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/users', adminRouter);

//  app.listen(port, () => {
//     console.log("server is running on port " + port);
//   });

export default app;
