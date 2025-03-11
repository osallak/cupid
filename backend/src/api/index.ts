// import { Hono } from "hono";
// import { db } from "./config/db";

// const app = new Hono();

// app.get("/users", async (c) => {
//     const users = await db.selectFrom("users").selectAll().execute();
//     c.json(users);
// });

// export default app;
import { serve } from '@hono/node-server';
import app from "./app";

const port = process.env.PORT || 3000;

serve({
    fetch: app.fetch,
    port: Number(port),
})

console.log(`Server running on port ${port}`);