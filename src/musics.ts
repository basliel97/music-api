import { Hono } from "hono";
import db from "./db.js";

export const musics = new Hono();

musics.get("/", async (c) => {
  try {
    const result = await db`SELECT * FROM music`;
    return c.json(result);
  } catch (error) {
    return c.json({ error: error }, 500);
  }
});
