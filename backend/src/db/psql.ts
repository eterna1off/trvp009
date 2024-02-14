import pkg from 'pg';

export default class Psql {
    private _pool: pkg.Pool;

    constructor() {
        this._pool = new pkg.Pool({
            database: "sklad",
            user: "postgres",
            password: "123456",
            port: 5432,
            host: "localhost"
        });
    }

    async query(query: string): Promise<any[]> {
        return (await this._pool.query(query)).rows;
    }
}
