// // users.controller.ts
// import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { Role } from 'src/roles/roles.enum';
// import { RolesGuard } from 'src/roles/roles.guard';
// import { Roles } from 'src/roles/roles.decorator';
// import { Admin } from 'typeorm';

// @Controller('users')
// // @UseGuards(JwtAuthGuard)
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}



//   @Get()
//   // @Roles(Role.Admin)
//   // @UseGuards(JwtAuthGuard, RolesGuard)
//   async findAll() {
//     try {
//       const users = await this.usersService.findAll();
//       return {
//         status: 'success',
//         message: 'Users successfully retrieved',
//         data: users,
//       };
//     } catch (error) {

//       throw new Error('Failed to get users');
      
//     }
//   }

//   @Get(':id')
//   // @Roles(Role.Admin)
//   // @UseGuards(JwtAuthGuard, RolesGuard)
//   async findOne(@Param('id') id: string) {
//     try {
//       const user = await this.usersService.findOne(+id);
//       return {
//         status: 'success',
//         message: 'User successfully retrieved',
//         data: user,
//       };
//     } catch (error) {
//       throw new Error('User not found');
//     }
//   }


//   @Delete(':id')
//   // @Roles(Role.Admin)
//   // @UseGuards(JwtAuthGuard, RolesGuard)
//   async remove(@Param('id') id: string) {
//     try {
//       await this.usersService.remove(+id);
//       return {
//         status: 'success',
//         message: 'User successfully deleted',
//       };
//     } catch (error) {
//       throw new Error('Failed to delete user');
//     }
//   }

//   @Delete('delete/all')
//   // @Roles(Role.Admin)
//   // @UseGuards(JwtAuthGuard, RolesGuard)
//   async deleteAll() {
//     try {
//       await this.usersService.deleteAll();

//     } catch (error) {
//       throw new Error('Failed to delete All user');
//     }
//   }
// }
import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { Roles } from '../roles/roles.decorator';
import { Role } from 'src/roles/roles.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(Role.ADMIN)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('create')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async createIt(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.usersService.create({...createUserDto});
      return {
        status: 'success',
        message: 'User successfully created',
        data: user,
      };
    } catch (error) {
      throw new Error('Failed to create user'+error);
    }
  }
}
