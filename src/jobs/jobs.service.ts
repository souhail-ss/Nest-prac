import { Injectable } from '@nestjs/common';
import { jobs } from './jobs.entity';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
import { User } from 'src/users/users.entity';

@Injectable()
export class JobsService {
constructor(
    @InjectRepository(jobs)
    private jobsRepository: Repository<jobs>,
    // @InjectRepository(User)
    // private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<jobs[]> {
    return this.jobsRepository.find();
  }

  findOne(id: number): Promise<jobs> {
    return this.jobsRepository.findOneBy({ id });
  }

  async create(createJobDto: CreateJobDto): Promise<jobs> {
    const { Title, Description, Status, Image, Cover ,createdBy } = createJobDto;
// 
    // const user = await this.userRepository.findOne({ where: { username: createdBy } });

    // if (!user) {
    //   throw new Error(`User with username '${createdBy}' not found.`);
    // }

    const job = new jobs();
    
    job.Title =Title;
    job.Description = Description;
    job.Status =Status;
   
    job.Image = Buffer.from(createJobDto.Image,'base64');
    job.Cover = Buffer.from(createJobDto.Cover,'base64');
    // job.createdBy = createdBy; 
    // job.creator = user;



    return this.jobsRepository.save(job);
  }

  async update(id: number, jobs: jobs): Promise<void> {
    await this.jobsRepository.update(id, jobs);
  }

  async remove(id: number): Promise<void> {
    await this.jobsRepository.delete(id);
  }

}
