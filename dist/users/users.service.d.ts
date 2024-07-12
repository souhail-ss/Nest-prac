import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | undefined>;
    create(createUserDto: CreateUserDto): Promise<User>;
    findOneByUsername(username: string): Promise<User | undefined>;
    remove(id: number): Promise<void>;
    deleteAll(): Promise<void>;
}
