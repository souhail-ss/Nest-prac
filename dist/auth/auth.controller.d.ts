import { AuthService } from './auth.service';
import { RegisterDto } from './register/register.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    register(registerDto: RegisterDto): Promise<{
        access_token: string;
    }>;
}
