import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { musics } from "./musics.js";

const app = new Hono();

app.use("/api", cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/musics", musics);

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
