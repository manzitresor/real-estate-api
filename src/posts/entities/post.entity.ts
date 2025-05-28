import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  content: string;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  type: string;

  @Column()
  images: string[];

  @Column()
  address: string;

  @Column()
  propertyType: string;

  @Column()
  utilitiesPolicy: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  user: User;
}
