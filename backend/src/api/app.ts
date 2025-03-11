import { Hono } from "hono";
import { swaggerUI } from "@hono/swagger-ui";
import { userController } from "./controllers/users";

const app = new Hono();

app
.basePath("/api")
.route("/users", userController);

// Use the middleware to serve Swagger UI at /ui
app.get('/ui', swaggerUI({ url: '/doc' }))

// // Serve Swagger UI
// app.get("/ui", (c: any) => {
//     return c.html(swaggerUI({ url: "/openapi.json" }));
// });

//   // Serve OpenAPI JSON
// app.get("/docs", (c: any) => c.json(app.getOpenAPIJson()));

export default app;