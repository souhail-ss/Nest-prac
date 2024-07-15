import { isNotEmpty, IsOptional } from 'class-validator';
import { User } from 'src/users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

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

  @Column({ type: 'varchar', nullable: true })
  CreatedBy?: string; // This will store the username of the creator

  // Example of a many-to-one relationship with a User entity (assuming one job has one creator)
  // @ManyToOne(() => User, user => user.)
  // creator: User;


}
