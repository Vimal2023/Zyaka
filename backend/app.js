import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import path from "path";

const app = express();
dotenv.config();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);

// --------------------------deployment------------------------------
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "backend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "backend","dist", "index.html"))
  );
} else {
  app.get("/", (req, res, next) => {
    return res.status(200).json({
      success: true,
      message: "HELLO WORLD",
    });
  });
}

// --------------------------deployment------------------------------

dbConnection();
app.use(errorMiddleware);

export default app;
