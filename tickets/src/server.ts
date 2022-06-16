import db from "./config/sequelize";
import express from "express";
import ticketRouter from "./routes/ticket.route";
import showRouter from "./routes/show.route";
import movieRouter from './routes/movie.route';
import morgan from "morgan";
import "dotenv/config";
import session from "cookie-session";
import cookieParser from "cookie-parser";

//FIXME
// declare let process: {
//   env: any;
// };

db.sync().then(() => {
  console.log("connect to db");
});

const app = express();

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
  })
);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/ticket", ticketRouter);
app.use("/show", showRouter);
app.use('/movie', movieRouter);
//  app.listen(port, () => {
//     console.log("server is running on port " + port);
//   });

export default app;
