import { IsInt, IsNumber, IsString, IsUUID } from 'class-validator';

// src/users/dto/create-user.dto.ts
export class CreateJobDto {
  @IsUUID()
  id: number;

  @IsString()
  Title_Job: string;
  
  @IsString()
  Details_Job: string;

}
