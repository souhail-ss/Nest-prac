import { IsInt, IsNumber, IsString, IsUUID } from 'class-validator';

// src/users/dto/create-user.dto.ts
export class CreateJobDto {


  @IsString()
  Title: string;
  
  @IsString()
  Description: string;

  @IsString()
  Image:string;

  @IsString()
  Cover:string;

  @IsString()
  Status:string;





  

}
