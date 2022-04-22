import { Coffee } from './entities/coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { Event } from 'src/events/entities/event.entity';

import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Flavor } from './entities/flavor.entity';

class MockCoffeesService {}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  // Whenever we call CoffeesService new MockCoffeeService will be provided
  providers: [{ provide: CoffeesService, useValue: new MockCoffeesService() }],
  exports: [CoffeesService],
})
export class CoffeesModule {}
