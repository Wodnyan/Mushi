import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import { notFoundHandler, errorHandler } from "./middlewares/error_handlers";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/";
import cors from "cors";
import "./db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/graphql", (req, res) =>
  graphqlHTTP({ schema, graphiql: true, context: { req, res } })(req, res)
);
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
