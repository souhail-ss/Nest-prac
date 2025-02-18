// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/roles/roles.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async upgradeToAdmin(id: any): Promise<User | undefined> {
     const user = await this.usersRepository.findOne({ where: { id:id} });
    user.roles = [Role.ADMIN];
     return await this.usersRepository.save(user);
  }

  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
  //   const user = this.usersRepository.create({
  //     ...createUserDto,
  //     password: hashedPassword,
  //     roles:[Role.USER]
  //   });
  //   return this.usersRepository.save(user);
  // }
    async create(createUserDto: CreateUserDto,user:User): Promise<User|string> {
    const { username, email, password } = createUserDto;
    if(user?.username =="ziyadi") return "Wa baraka azbiii";
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = this.usersRepository.create({
      username,
      email,
      password: hashedPassword,
      roles: [Role.USER], // Assign default role here
    });
     return this.usersRepository.save(createdUser);  
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async deleteAll(): Promise<void> {
    await this.usersRepository.clear();
  }
}
