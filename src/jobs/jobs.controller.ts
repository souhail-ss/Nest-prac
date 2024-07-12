// jobs.controller.ts

import { Controller, Get, Post, Param, Body, Put, Delete, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { jobs } from './jobs.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateJobDto } from './dto/create-job.dto';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/roles.enum';
import { RolesGuard } from 'src/roles/roles.guard';

// @UseGuards(JwtAuthGuard)
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  
  async create(@Body() createJobDto: CreateJobDto): Promise<jobs> {
    try {
      return  this.jobsService.create(createJobDto); // Assuming this returns a 'jobs' entity
       // Return the job entity directly

      } catch (error) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Failed to create job',
        }, HttpStatus.BAD_REQUEST+error);
      }
    }



  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  findAll(): Promise<jobs[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  findOne(@Param('id') id: number): Promise<jobs> {
    return this.jobsService.findOne(id);
  }

  @Put('modify/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  update(@Param('id') id: number, @Body() job: jobs): Promise<void> {
    return this.jobsService.update(id, job);
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)  
  remove(@Param('id') id: number): Promise<void> {
    return this.jobsService.remove(id);
  }
}
