import {
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @Matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
    message:
      'Password must have at least 6 characters, 1 lowercase, and 1 uppercase letter',
  })
  @IsString()
  password: string;

  @IsString()
  address: string;
  @IsPhoneNumber()
  phone: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  city?: string;
}
