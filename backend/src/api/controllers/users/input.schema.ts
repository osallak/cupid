import { z } from 'zod';
import 'zod-openapi';

const createUser = z.object({
    username: z.string(),//.openapi({ description: "The username of the user" , example: "johndoe" }),
    email: z.string().email(),
    password: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    gender: z.enum(["male", "female", "other"]),
    interests: z.enum(["male", "female", "both"]),
})

const updateUser = z.object({
    username: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    gender: z.enum(["male", "female", "other"]).optional(),
    interests: z.enum(["male", "female", "both"]).optional(),
})

export const inputSchema ={
    createUser,
    updateUser,
}

export type userCreateInputType = z.infer<typeof inputSchema.createUser>;
export type userUpdateInputType = z.infer<typeof inputSchema.updateUser>;