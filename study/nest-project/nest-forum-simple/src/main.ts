import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
//import * as hbs from 'hbs';
import hbs from 'hbs';
//import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = (await NestFactory.create(AppModule)) as any;
  //const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // handlebars 뷰 엔진 설정
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  //app.setViewEngine('handlebars');
  //hbs.registerPartials(join(__dirname, '..', 'views', 'partials'));

  hbs.registerHelper('inc', (v) => Number(v) + 1);
  hbs.registerHelper('dec', (v) => Number(v) - 1);
  hbs.registerHelper('gt', (a, b) => Number(a) > Number(b));
  hbs.registerHelper('lt', (a, b) => Number(a) < Number(b));

  await app.listen(process.env.PORT ?? 3000);
  console.log(`http://localhost:${process.env.PORT || 3000}`);
}
bootstrap();
