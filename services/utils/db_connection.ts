import { Pool, PoolClient } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();
// TODO Rework
class DBConnection {
  pool: Pool | null = null;

  poolClient: PoolClient | undefined;

  createPool(): Pool {
    this.pool = new Pool();
    return this.pool;
  }

  async createMainClient() {
    this.pool ?? this.createPool();
    this.poolClient = await this.pool?.connect();
  }
  async closeClient() {
    this.poolClient?.release();
  }

  async runQuery(query: string, closePool = true) {
    const pool: Pool = this.createPool();
    const res = await pool.query(query);
    if (closePool) await pool.end();
    return res;
  }
  // Важно потом закрывать клиента
  async runQueryWithMainPoolClient(query: string) {
    this.poolClient ?? (await this.createMainClient());
    const res = await this.poolClient?.query(query);
    return res;
  }

  async runQueryWithTempClient(query: string) {
    const client: PoolClient = await this.pool?.connect();
    let res: any;
    try {
      res = await client.query(query);
    } finally {
      client.release();
    }
    return res;
  }
}

export default DBConnection;
