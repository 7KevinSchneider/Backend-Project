import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { IUser } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  findOneBy(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private usersRepository: UsersRepository) {}

  async findAll(page: number, limit: number) {
    const dbUsers = await this.usersRepository.getUsers(page, limit);

    return dbUsers.map(({ password, ...user }) => user);
  }

  async findById(id: number) {
    const foundUser = await this.usersRepository.getUserById(id);

    const { password, ...userWithoutPassword } = foundUser;

    return userWithoutPassword;
  }

  async createUser(createUserDto: CreateUserDto) {
    console.log('Previo al service');

    const id = await this.usersRepository.createUser(createUserDto);
    return id;
  }

  updateUser(id: number, user: Partial<IUser>) {
    return this.usersRepository.updateUser(id, user);
  }

  deleteUser(id: number) {
    return this.usersRepository.deleteUser(id);
  }

  findOneByEmail(email: string) {
    return this.usersRepository.findOneByEmail(email);
  }
}
