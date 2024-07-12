// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { UsersService } from './users/users.service';

// async function bootstrap() {
//   const app = await NestFactory.createApplicationContext(AppModule);
//   const usersService = app.get(UsersService);

//   // Check if an admin user already exists
//   const adminUser = await usersService.findOneByUsername('admin');
//   if (!adminUser) {
//     // Create a new admin user
//     await usersService.create({
//       username: 'pork',
//       password: '123456',
//       email: 'pork@mail.fr',
//       roles: ['admin'],
//     });
//     console.log('Admin user created');
//   } else {
//     console.log('Admin user already exists');
//   }

//   await app.close();
// }

// bootstrap();
