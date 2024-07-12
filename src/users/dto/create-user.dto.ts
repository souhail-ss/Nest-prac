// create-user.dto.ts
import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
import { Role } from 'src/roles/roles.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;


  @IsString()
  @IsNotEmpty()
  password: string;


  @IsString()
  @IsEmail()// Array of role names assigned to the user
  email: string;
  

}
