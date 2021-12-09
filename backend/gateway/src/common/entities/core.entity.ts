import { PrimaryGeneratedColumn } from 'typeorm';

export class Core {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
}
