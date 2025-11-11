import { Module } from '@nestjs/common';
import { Weather2Controller } from './weather2.controller';

@Module({
  controllers: [Weather2Controller]
})
export class Weather2Module {}
