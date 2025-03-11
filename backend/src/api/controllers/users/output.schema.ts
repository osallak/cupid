import { z } from "zod";

export const userAllOutputSchema = z.object({
    id: z.string(),
    username: z.string(),
    email: z.string().email(),
    first_name: z.string(),
    last_name: z.string(),
    gender: z.enum(["male", "female", "other"]),
    interests: z.enum(["male", "female", "both"]),
});

export const userOutputSchema = z.object({
    id: z.string(),
    username: z.string(),
    email: z.string().email(),
    first_name: z.string(),
    last_name: z.string(),
    gender: z.enum(["male", "female", "other"]),
    interests: z.enum(["male", "female", "both"]),
});