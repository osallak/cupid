import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema
    .createTable('users')
    .addColumn('id', 'text', (col: any) => 
        col.primaryKey())
    .addColumn('username', 'text', (col: any) =>
        col.unique().notNull())
    .addColumn('email', 'text', (col: any) =>
        col.notNull())
    .addColumn('first_name', 'text')
    .addColumn('last_name', 'text')
    .addColumn('gender', 'text', (col: any) =>
        col.notNull())
    .addColumn('interests', 'text', (col: any) =>
        col.notNull())
    .addColumn('password', 'text')
    .addColumn('created_at', 'timestamp', (col: any) => 
        col.defaultTo(sql`now()`).notNull(),
    )
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable('users').execute()
}

