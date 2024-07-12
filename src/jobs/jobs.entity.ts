import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'jobs'})
export class jobs{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Title_Job:string;

  @Column()
  Details_Job:string;

  
}


  

