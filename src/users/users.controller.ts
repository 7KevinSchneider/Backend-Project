import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './user.interface';
import { AuthGuard } from 'src/guard/auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get()
  @HttpCode(200)
  findAll(@Query('page') page: string, @Query('limit') limit: string) {
    if (page && limit) return this.usersService.findAll(+page, +limit);

    return this.usersService.findAll(1, 5);
  }

  @Get(':id')
  @HttpCode(200)
  findById(@Param('id') id: string) {
    return this.usersService.findById(+id);
  }

  @Post()
  @HttpCode(201)
  async createUser(@Body() createUserDto: CreateUserDto) {
    console.log('Se ejecuto el controller');

    const id = await this.usersService.createUser(createUserDto);
    return id;
  }

  @Put(':id')
  @HttpCode(200)
  updateUser(
    @Param('id') id: string,
    @Body() createUserDto: Partial<CreateUserDto>,
  ) {
    return this.usersService.updateUser(+id, createUserDto);
  }

  @Delete(':id')
  @HttpCode(200)
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}
