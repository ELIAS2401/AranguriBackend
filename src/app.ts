import express from "express";
import cors from "cors";
import instrumentoRoutes from "./routes/instrumento.routes";
import { errorHandler } from "./middlewares/error-handler";
import { notFoundHandler } from "./middlewares/not-found";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/instrumentos", instrumentoRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;