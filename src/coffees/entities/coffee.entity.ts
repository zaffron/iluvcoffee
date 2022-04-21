import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Flavor } from './flavor.entity';

@Entity() // sql table === 'coffee' if you want to use 'plural work just type that inside the entity method like @Entity('coffees')
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable() // 👈 Join the 2 tables - only the OWNER-side does this
  @ManyToMany(
    () => Flavor,
    (flavor) => flavor.coffees, // what is "coffee" within Flavor entity
  )
  flavors: string[];
}
