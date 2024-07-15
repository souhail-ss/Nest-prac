import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./users.entity").User[]>;
    findOne(id: string): Promise<import("./users.entity").User>;
    remove(id: string): Promise<void>;
    createIt(user: any, createUserDto: CreateUserDto): Promise<string | import("./users.entity").User>;
    upgrade(user: any, body: any): Promise<{
        status: string;
        message: string;
        data: any;
    }>;
}
