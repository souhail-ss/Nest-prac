import { Repository } from 'typeorm';
import { User } from './users.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(user: User): Promise<User>;
    update(id: number, user: User): Promise<void>;
    remove(id: number): Promise<void>;
}
