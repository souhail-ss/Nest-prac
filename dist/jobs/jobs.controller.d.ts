import { JobsService } from './jobs.service';
import { jobs } from './jobs.entity';
import { CreateJobDto } from './dto/create-job.dto';
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    create(createJobDto: CreateJobDto): Promise<jobs>;
    findAll(): Promise<jobs[]>;
    findOne(id: number): Promise<jobs>;
    update(id: number, job: jobs): Promise<void>;
    remove(id: number): Promise<void>;
}
