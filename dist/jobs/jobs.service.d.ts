import { jobs } from './jobs.entity';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
export declare class JobsService {
    private jobsRepository;
    constructor(jobsRepository: Repository<jobs>);
    findAll(): Promise<jobs[]>;
    findOne(id: number): Promise<jobs>;
    create(createJobDto: CreateJobDto): Promise<jobs>;
    update(id: number, jobs: jobs): Promise<void>;
    remove(id: number): Promise<void>;
}
