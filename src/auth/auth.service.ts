import { Injectable } from '@nestjs/common';
import { SignInAuthDto } from './dto/signin-auth.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  signIn(credential: SignInAuthDto) {
    const user = this.userService.findOneByEmail(credential.email);
    if (user && user.password === credential.password) {
      return 'you are logged in!';
    }
    return 'Incorrect credentials';
  }
}
