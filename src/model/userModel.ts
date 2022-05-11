import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/userInterface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const result = await this.connection
      .execute('SELECT * FROM books');
    const [rows] = result;
    return rows as User[];
  }

  public async create(user: User): Promise<User> {
    const { name, email, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]);
    return { id: insertId, name, email, password };
  }
}