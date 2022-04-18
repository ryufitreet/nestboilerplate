import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({ name: 'item' })
export class ItemEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 128, default: false})
  name: string;

}