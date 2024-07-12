// jobs.controller.ts

import { Controller, Get, Post, Param, Body, Put, Delete, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { jobs } from './jobs.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateJobDto } from './dto/create-job.dto';

// @UseGuards(JwtAuthGuard)
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post('create')
  async create(@Body() createJobDto: CreateJobDto): Promise<jobs> {
    try {
      const job = await this.jobsService.create(createJobDto); // Assuming this returns a 'jobs' entity
      return job; // Return the job entity directly
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Failed to create job',
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  findAll(): Promise<jobs[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<jobs> {
    return this.jobsService.findOne(id);
  }

  @Put('modify/:id')
  update(@Param('id') id: number, @Body() job: jobs): Promise<void> {
    return this.jobsService.update(id, job);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number): Promise<void> {
    return this.jobsService.remove(id);
  }
}
