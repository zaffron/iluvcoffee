import { Module } from '@nestjs/common';

import { CoffeesModule } from 'src/coffees/coffees.module';

import { DatabaseModule } from './../database/database.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [
    DatabaseModule.register({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'iluvcoffee',
      username: 'postgres',
      password: 'postgres',
    }),
    CoffeesModule,
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
