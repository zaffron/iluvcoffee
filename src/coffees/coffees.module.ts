import { Coffee } from './entities/coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { Event } from 'src/events/entities/event.entity';

import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Flavor } from './entities/flavor.entity';

class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  // Whenever we call CoffeesService new MockCoffeeService will be provided
  providers: [
    CoffeesService,
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? DevelopmentConfigService
          : ProductionConfigService,
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
