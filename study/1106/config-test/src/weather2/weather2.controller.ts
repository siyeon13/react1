import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('weather2')
export class Weather2Controller {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getWeather() {
    const apiUrl = this.configService.get('WEATHER_API_URL') as string;
    const apiKey = this.configService.get('WEATHER_API_KEY') as string;
    return this.callWeatherApi(apiUrl, apiKey);
  }

  private callWeatherApi(apiUrl: string, apiKey: string): string {
    console.log('날씨 정보 가져오는중');
    console.log(apiUrl);
    console.log(apiKey);
    return '내일은 맑음!';
  }
}
//   @Get()
//   getHello(): string {
//     // config service 사용
//     return this.configService.get('MESSAGE') as string;
//   }
