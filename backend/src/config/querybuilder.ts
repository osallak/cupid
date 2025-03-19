
class Insert {
    private table: string;
    private columns: string[];
    private values: string[];
    private conditions: string[];
    private params: any[]; // placeholder for values

    private constructor(table: string) {
        this.table = table;
        this.columns = [];
        this.values = [];
        this.conditions = [];
        this.params = [];
    }

    static into(table: string) {
        return new Insert(table);
    }

    private formatValue(value: unknown): string {
        if (typeof value === "number") {
            return value.toString();
        }
        if (value instanceof Date) {
            return `'${value.toISOString()}'`;
        }
        return `'${value}'`;
    }

    set(cells: Record<string, string | number>) {
        for (var [key, value] of Object.entries(cells)) {
            if (value !== undefined) {
                value = this.formatValue(value);
                this.columns.push(key);
                this.params.push(value);
                this.values.push(`$${this.params.length}`);
            }
        }
        return this;
    }

    $if(condition: boolean, callback: (query: this) => void): this {
        if (condition) {
            callback(this);
        }
        return this;
    }

    where(column: string, operator: string, value: string) {
        this.params.push(value);
        this.conditions.push(`${column} ${operator} $${this.params.length}`);
        return this;
    }

    execute() {
        if (!this.columns.length) {
            throw new Error("You must provide at least one column");
        }
        if (!this.values.length) {
            throw new Error("You must provide at least one row of values");
        }
        return {
            query: `INSERT INTO ${this.table} (${this.columns.join(", ")}) VALUES ${this.values.join(", ")} RETURNING *`,
            params: this.params
        }
    }
}

class Update {
    private table: string;
    private values: string[];
    private conditions: string[];
    private params: any[]; // placeholder for values

    private constructor(table: string) {
        this.table = table;
        this.values = [];
        this.conditions = [];
        this.params = [];
    }

    static updateTable(table: string) {
        return new Update(table);
    }
    
    private formatValue(value: unknown): string {
        if (typeof value === "number") {
            return value.toString();
        }
        if (value instanceof Date) {
            return `'${value.toISOString()}'`;
        }
        return `'${value}'`;
    }

    set(values: Record<string, string | number>) {
        for (var [key, value] of Object.entries(values)) {
            if (value !== undefined) {
                value = this.formatValue(value);
                this.params.push(value);
                this.values.push(`${key} = $${this.params.length}`);
            }
        }
        return this
    }

    where(column: string, operator: string, value: string) {
        this.params.push(value);
        this.conditions.push(`${column} ${operator} $${this.params.length}`);
        /*
            explanation:
            this.params = [val1, val2, val3]
            this.params.length = 3
            $${this.params.length} = $3
            $3 = val3
        */
        return this;
    }

    $if(condition: boolean, callback: (query: this) => void): this {
        if (condition) {
            callback(this);
        }
        return this;
    }

    execute() {
        if (!this.conditions.length) {
            throw new Error("You must provide at least one condition");
        }
        if (!this.values.length) {
            throw new Error("You must provide at least one value to update");
        }
        return {
        query: `UPDATE ${this.table} SET ${this.values.join(", ")} WHERE ${this.conditions.join(" AND ")} RETURNING *`,
        params: this.params
        }
    }
}

class Select{
    private table: string;
    private columns: string[];
    private conditions: string[];
    private params: any[];

    private constructor(table: string) {
        this.table = table;
        this.columns = [];
        this.conditions = [];
        this.params = [];
    }

    static from(table: string) {
        return new Select(table);
    }

    select(columns: string[]) {
        this.columns = columns;
        return this;
    }

    where(column: string, operator: string, value: string) {
        this.params.push(value);
        this.conditions.push(`${column} ${operator} $${this.params.length}`);
        return this;
    }

    $if(condition: boolean, callback: (query: this) => void): this {
        if (condition) {
            callback(this);
        }
        return this;
    }

    execute() {
        return {
            query: `SELECT ${this.columns.join(", ")} FROM ${this.table} WHERE ${this.conditions.join(" AND ")}`,
            params: this.params
        }
    }
}

export const QueryBuilder = {
    Update,
    Insert,
    Select
};