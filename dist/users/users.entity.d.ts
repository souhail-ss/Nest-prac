import { Role } from 'src/roles/roles.enum';
export declare class User {
    id: number;
    username: string;
    password: string;
    email: string;
    roles: Role[];
}
