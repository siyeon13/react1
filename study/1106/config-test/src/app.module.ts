import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// 모듈 추가
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './weather/weather.module';
import { Weather2Controller } from './weather2/weather2.controller';
import { Weather2Module } from './weather2/weather2.module';
import config from './configs/config';

console.log(`env : ` + process.env.NODE_ENV);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/envs/${process.env.NODE_ENV}.env`,
      load: [config], // yaml, custom설정
      cache: true,
      expandVariables: true,
    }),
    WeatherModule,
    Weather2Module,
  ],
  controllers: [AppController, Weather2Controller],
  providers: [AppService],
})
export class AppModule {}
