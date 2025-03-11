import { Hono } from "hono";
import { db } from "../../../config/db";
import { swaggerUI } from "@hono/swagger-ui";
import { describeRoute } from 'hono-openapi'

import { Schema, z } from "zod";
import {
    resolver,
    validator as zValidator,
} from 'hono-openapi/zod'
import { userAllOutputSchema, userOutputSchema } from "./output.schema";
import { inputSchema } from "./input.schema";
import { userService } from "../../services/users";

export const userController = new Hono();

userController.get("/", describeRoute({
    description: "Get all users",
    responses: {
        "200": {
            description: "Success",
            content: {
                "application/json": {
                    schema: resolver(userAllOutputSchema),
                },
            },
        },
    }
}),
async (c : any) => {
    const users = await userService.getAll();
    return c.json(users);
});

userController.get(":id", describeRoute({
    description: "Get a user by ID",
    responses: {
        "200": {
            description: "Success",
            content: {
                "application/json": {
                    schema: resolver(userOutputSchema),
                },
            },
        },
    }
}),
zValidator("param", z.object({
    id: z.string(),
})),
 async (c) => {
    const pr = c.req.valid("param");
    const user = await userService.getOne(pr.id);
    return c.json(user);
});


userController.post("/", describeRoute({
    description: "Create a user",
    responses: {
        "200": {
            description: "Success",
            content: {
                "application/json": {
                    schema: resolver(userOutputSchema),
                },
            },
        },
    }
}),
zValidator("json", inputSchema.createUser),
async (c) => {
    const body = await c.req.valid("json");
    return c.json(userService.create(body));
});

userController.put(":id", describeRoute({
    description: "Update a user by ID",
    responses: {
        "200": {
            description: "Success",
            content: {
                "application/json": {
                    schema: resolver(userOutputSchema),
                },
            },
        },
    }
}),
zValidator("param", z.object({
    id: z.string(),
})),
zValidator("json", inputSchema.updateUser),
async (c) => {
    const pr = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(userService.update(pr.id, body));
});

userController.delete(":id", describeRoute({
    description: "Delete a user by ID",
    responses: {
        "200": {
            description: "Success",
            content: {
                "application/json": {
                    schema: resolver(userOutputSchema),
                },
            },
        },
    }
}),
zValidator("param", z.object({
    id: z.string(),
})),
async (c) => {
    const pr = c.req.valid("param");
    return c.json(userService.remove(pr.id));
});