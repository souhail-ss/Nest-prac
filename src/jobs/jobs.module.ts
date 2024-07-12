import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jobs } from './jobs.entity';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';

@Module({
    imports:[TypeOrmModule.forFeature([jobs])],
    controllers:[JobsController],
    providers:[JobsService],
    exports: [JobsService],
})
export class JobsModule {}
