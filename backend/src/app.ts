import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database";
import menuRoutes from "./routes/menuRoutes";

dotenv.config();

const app: Application = express();

app.use(cors({
    credentials: true ,
    origin: "http://localhost:5173"
}));
app.use(bodyParser.json());

app.use("/api/v1", menuRoutes);


connectDB();

export default app;
