// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { config } from 'process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/users.entity';
import { JobsModule } from './jobs/jobs.module';
import { jobs } from './jobs/jobs.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'users.db',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // )}
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available globally
    }),
     

    TypeOrmModule.forRoot({
      type: 'postgres', // Database type
      host: process.env.DB_HOST, // Database host
      port: parseInt(process.env.DB_PORT, 10), // Database port
      username: process.env.DB_USERNAME, // Database username
      password: process.env.DB_PASSWORD, // Database password
      database: process.env.DB_NAME, // Database name
      entities: [User,jobs], // Entities to be registered with TypeORM
      synchronize: true, // Synchronize database schema with entities (set to false in production)
    
    }),
    // TypeOrmModule.forFeature([Users, ...]),


    UsersModule,
    JobsModule,
    AuthModule
  ],
  controllers:[AppController],
  providers:[AppService]
})
export class AppModule {}
