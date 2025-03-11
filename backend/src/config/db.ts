import dotenv from 'dotenv';
import { Kysely, PostgresDialect } from 'kysely';
import * as pg from 'pg';

dotenv.config();

interface Database {
    users: {
        id: string;
        username: string;
        email: string;
        first_name: string;
        last_name: string;
        password: string;
        created_at: Date;
    }; 
}

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

export const dialect = new PostgresDialect({
    pool: pool,
});

export const db = new Kysely<Database>({dialect});