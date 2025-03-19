import sql from "../../../config/db";
import { userCreateInputType, userUpdateInputType } from "../../controllers/users/input.schema";
import { response } from "../../../lib/server";
import { QueryBuilder } from "../../../config/querybuilder";

async function getOne(id: string) {
    const user = await sql`
        SELECT * FROM users WHERE id = ${id}`;
    return user[0];
}

async function getAll() {
    return await sql`
        SELECT * FROM users`;
}

async function create(user: userCreateInputType) {
    return await sql`
        INSERT INTO users
            values (user)
        RETURNING user`;
}

async function update(id: string, user: userUpdateInputType) {
    const {query} = QueryBuilder.Update.updateTable('users')
    .set({...user})
    .where('id', '=', id)
    .execute();
}

async function remove(id: string) {
    return await sql`
        DELETE FROM users WHERE id = ${id}`;
}

export const userService = {
    getOne,
    getAll,
    create,
    update,
    remove,
};