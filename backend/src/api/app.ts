import { Hono } from "hono";
import { userController } from "./controllers/users";
import { auth } from "../lib/auth";
import { apiReference} from '@scalar/hono-api-reference'
import { openAPISpecs } from 'hono-openapi'

const app = new Hono();

app
.basePath("/api")
.route("/users", userController);

app.on(["GET", "POST"], ["../lib/auth/**"], (c) => auth.handler(c.req.raw));

app.get('/docs', 
    apiReference({
        theme: 'dark',
        spec: {
            url: '/openapi'
        },
    })
);


app.get(
  '/openapi',
  openAPISpecs(app, {
    documentation: {
      info: {
        title: 'Hono API',
        version: '1.0.0',
        description: 'Greeting API',
      },
      servers: [
        { url: 'http://localhost:8000', description: 'Local Server' },
      ],
    },
  })
)

export default app;