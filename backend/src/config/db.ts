import dotenv from 'dotenv';
import postgres from 'postgres';


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

const sql = postgres({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    max: 10,
});

export default sql;