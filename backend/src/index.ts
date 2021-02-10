import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
