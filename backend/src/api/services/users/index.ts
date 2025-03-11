import { db } from "../../../config/db";
import { userCreateInputType, userUpdateInputType } from "../../controllers/users/input.schema";

async function getOne(id: string) {
    const user = await db.selectFrom("users")
        .where("id", "=", id)
        .selectAll()
        .executeTakeFirst();
    return user;
    
}

async function getAll() {
    const users = await db.selectFrom("users")
        .selectAll()
        .execute();
    return users;
}

async function create(user: userCreateInputType) {
    const newUser = await db.insertInto("users")
        .values({
            ...user,
            id: '', // Add the missing id property
            created_at: new Date(), // Convert the number to a Date object
        })
        .executeTakeFirst();
    return newUser;
}

async function update(id: string, user: userUpdateInputType) {
    const updatedUser = await db.updateTable("users")
        .set({
            ...user,
            //updated_at: new Date(), // Add the updated_at property
        })
        .where("id", "=", id)
        .execute();
    return updatedUser;
}

async function remove(id: string) {
    const deletedUser = await db.deleteFrom("users")
        .where("id", "=", id)
        .execute();
    return deletedUser;
}

export const userService = {
    getOne,
    getAll,
    create,
    update,
    remove,
};