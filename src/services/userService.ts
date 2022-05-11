import connection from '../model/connection';
import UserModel from '../model/userModel';
import User from '../interfaces/userInterface';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  // public async getById(id: number): Promise<User> {
  //   const user = await this.model.getById(id);
  //   return user;
  // }

  public create(user: User): Promise<User> {
    return this.model.create(user);
  }
}

export default UserService;