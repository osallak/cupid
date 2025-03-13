import { betterAuth } from "better-auth";
import { pool } from "../config/db";
 
export const auth = betterAuth({
    database: pool,
    emailAndPassword: {
        enabled: true,
    },
    usernameAndPassword: {
        enabled: true,
    },
    // socialProviders: {
    //     google: {
    //         enabled: true,
    //         clientId: process.env.GOOGLE_CLIENT_ID,
    //         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //     },
    //     facebook: {
    //         enabled: true,
    //         clientId: process.env.FACEBOOK_CLIENT_ID,
    //         clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    //     },
    // },
})