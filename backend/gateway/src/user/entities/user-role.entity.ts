import { Core } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class UserRole extends Core {
  @Column({ type: 'varchar', length: 40, unique: true })
  name: string;
}
