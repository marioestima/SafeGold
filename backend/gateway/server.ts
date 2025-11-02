import express from "express";
import proxy from "express-http-proxy";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const port = 8080;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());


