import { Role } from 'src/roles/roles.enum';
import { jobs } from '../jobs/jobs.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('users')
export class User {
 
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column('text', { array: true, default: '{}' })
  roles: Role[]; // store roles as a comma-separated string

  // @OneToMany(() => jobs, job => job.creator  )
  // jobs: jobs[]; 


}
