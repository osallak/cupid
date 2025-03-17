class QueryBuilderUpdate {
    table: string;
    values: string[];
    conditions: string[];

    private constructor(table: string) {
        this.table = table;
        this.values = [];
        this.conditions = [];
    }

    static updateTable(table: string) {
        return new QueryBuilderUpdate(table);
    }

    set(values: Record<string, string | number>) {
        for (const key in values) {
            if (values[key] !== undefined) {
                this.values.push(`${key} = '${values[key]}'`);
            }
        }
        return this
    }

    where(column: string, operator: string, value: string) {
        this.conditions.push(`${column} ${operator} '${value}'`);
        return this;
    }

    execute() {
        return `UPDATE ${this.table} SET ${this.values.join(", ")} WHERE ${this.conditions.join(" AND ")} RETURNING *`;
    }
}