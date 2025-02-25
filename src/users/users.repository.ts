import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';

@Injectable()
export class UsersRepository {
  private users: IUser[] = [
    {
      id: 1,
      email: 'barto@gmail.com',
      name: 'Barto',
      password: '123456',
      address: 'Siempre viva',
      phone: '152561254',
    },
    {
      id: 2,
      email: 'barto@gmail.com',
      name: 'Barto',
      password: '123456',
      address: 'Siempre viva',
      phone: '152561254',
      country: 'argentina',
      city: 'buenos aires',
    },
    {
      id: 3,
      email: 'ana@gmail.com',
      name: 'Ana',
      password: '654321',
      address: 'Calle Falsa 123',
      phone: '156987123',
      country: 'mexico',
      city: 'mexico city',
    },
    {
      id: 4,
      email: 'juan@gmail.com',
      name: 'Juan',
      password: 'abcdef',
      address: 'Av. Libertador 1000',
      phone: '154362987',
      country: 'chile',
      city: 'santiago',
    },
    {
      id: 5,
      email: 'maria@gmail.com',
      name: 'Maria',
      password: 'password123',
      address: 'Calle del Sol 456',
      phone: '153476928',
      country: 'peru',
      city: 'lima',
    },
    {
      id: 6,
      email: 'pedro@gmail.com',
      name: 'Pedro',
      password: 'xyz123',
      address: 'Calle 10',
      phone: '151234567',
      country: 'colombia',
      city: 'bogota',
    },
    {
      id: 7,
      email: 'laura@gmail.com',
      name: 'Laura',
      password: 'mypass123',
      address: 'Calle Primavera 789',
      phone: '152398745',
      country: 'spain',
      city: 'madrid',
    },
    {
      id: 8,
      email: 'jose@gmail.com',
      name: 'Jose',
      password: 'jose123',
      address: 'Calle del Río 101',
      phone: '157625389',
      country: 'argentina',
      city: 'rosario',
    },
    {
      id: 9,
      email: 'lucia@gmail.com',
      name: 'Lucia',
      password: 'qwerty123',
      address: 'Calle Viento 222',
      phone: '158738291',
      country: 'uruguay',
      city: 'montevideo',
    },
    {
      id: 10,
      email: 'raul@gmail.com',
      name: 'Raul',
      password: 'raul123',
      address: 'Calle Norte 300',
      phone: '159472860',
      country: 'paraguay',
      city: 'asuncion',
    },
  ];

  async getUsers(page: number, limit: number) {
    const start = (page - 1) * limit;
    const end = start + limit;

    const users = this.users.slice(start, end);

    return users;
  }

  async getUserById(id: number) {
    return this.users.find((user) => user.id === id) || null;
  }

  async createUser(user: Omit<IUser, 'id'>) {
    const id = this.users.length + 1;
    const newUser = { id, ...user };
    this.users = [...this.users, newUser];
    const { password, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }

  updateUser(id: number, user: Partial<IUser>) {
    const oldUser = this.users.find((user) => user.id === id);
    if (!oldUser) return 'Error el usuario no existe';

    const updateUser = { ...oldUser, ...user };

    const index = this.users.findIndex((user) => user.id === id);

    this.users[index] = updateUser;

    return 'usuario actualizado';
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);

    return this.users;
  }
  findOneByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}

// Users

// id:number

// email: string

// name: string

// password: string

// address: string

// phone: string

// country?: string | undefined

// city?: string | undefined
