"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
const jobs_entity_1 = require("./jobs.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let JobsService = class JobsService {
    constructor(jobsRepository) {
        this.jobsRepository = jobsRepository;
    }
    findAll() {
        return this.jobsRepository.find();
    }
    findOne(id) {
        return this.jobsRepository.findOneBy({ id });
    }
    async create(createJobDto) {
        const { Title, Description, Status, Image, Cover } = createJobDto;
        const job = new jobs_entity_1.jobs();
        job.Title = Title;
        job.Description = Description;
        job.Status = Status;
        job.Image = Buffer.from(createJobDto.Image, 'base64');
        job.Cover = Buffer.from(createJobDto.Cover, 'base64');
        return this.jobsRepository.save(job);
    }
    async update(id, jobs) {
        await this.jobsRepository.update(id, jobs);
    }
    async remove(id) {
        await this.jobsRepository.delete(id);
    }
};
exports.JobsService = JobsService;
exports.JobsService = JobsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(jobs_entity_1.jobs)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], JobsService);
//# sourceMappingURL=jobs.service.js.map