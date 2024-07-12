import { isNotEmpty, IsOptional } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'jobs' })
export class jobs {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  Title: string;

  @Column()
  Description: string;

  @Column({ type: 'bytea', nullable: true })
  Image: Buffer;
  // @isNotEmpty()

  @Column({ type: 'bytea', nullable: true })
  Cover: Buffer;

  @Column({})
  Status: string;
}
