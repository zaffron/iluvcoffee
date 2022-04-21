import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['name', 'type'])
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  // @Index() can be used like this
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
