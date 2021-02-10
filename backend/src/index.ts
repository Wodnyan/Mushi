import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import { notFoundHandler, errorHandler } from "./middlewares/error_handlers";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
