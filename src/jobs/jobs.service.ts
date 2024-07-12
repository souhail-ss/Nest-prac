import { Injectable } from '@nestjs/common';
import { jobs } from './jobs.entity';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
constructor(
    @InjectRepository(jobs)
    private jobsRepository: Repository<jobs>,
  ) {}

  findAll(): Promise<jobs[]> {
    return this.jobsRepository.find();
  }

  findOne(id: number): Promise<jobs> {
    return this.jobsRepository.findOneBy({ id });
  }

  async create(createJobDto: CreateJobDto): Promise<jobs> {
    const { Title, Description, Status, Image, Cover } = createJobDto;
    const job = new jobs();
    job.Title =Title;
    job.Description = Description;
    job.Status =Status;
   
    job.Image = Buffer.from(createJobDto.Image,'base64');
    job.Cover = Buffer.from(createJobDto.Cover,'base64');



    return this.jobsRepository.save(job);
  }

  async update(id: number, jobs: jobs): Promise<void> {
    await this.jobsRepository.update(id, jobs);
  }

  async remove(id: number): Promise<void> {
    await this.jobsRepository.delete(id);
  }

}
