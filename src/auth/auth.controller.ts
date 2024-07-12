import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './register/register.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  // usersService: ny;
  constructor(private readonly authService: AuthService,
    private readonly usersService: UsersService,


  ) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    try {
      const user = await this.authService.validateUser(body.username, body.password);
      if (!user) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
      return this.authService.login(user);
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    try {
      const userExists = await this.usersService.findOneByUsername(registerDto.username);
      if (userExists) {
        throw new HttpException('Username already taken', HttpStatus.BAD_REQUEST);
      }
  
      const newUser = await this.usersService.create(registerDto);
      const loginResult = await this.authService.login(newUser);
  
      return loginResult;
    } catch (error) {
      console.error('Error registering user:', error);
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
