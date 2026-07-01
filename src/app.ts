import express from "express";
import cors from "cors";
import supabase from "./config/supabase";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", async (_, res) => {
  const { data, error } = await supabase
    .from("instrumentos")
    .select("*");

  if (error) {
    return res.status(500).json(error);
  }

  return res.json(data);
});

export default app;