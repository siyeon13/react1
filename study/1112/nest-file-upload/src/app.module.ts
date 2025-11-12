import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// rootPath : 서버가 실제로 파일을 찾을 물리적 경로
// serveRoot : 클라이언트가 이 경로로 들어올때 파일을 제공하겠다는 의미 (/uploads 폴더 안에서 찾아줌)
// __dirname : 현재파일이 위치한 디렉토리의 절대경로
// join : Node.js의 path 모듈 함수로, OS에 맞는 파일 경로를 안전하게 연결해주는 함수
// 👉 http://localhost:3000/uploads/파일명 형태로 접근할 수 있음
// http://localhost:3000/uploads/db5c59f8-98a7-40ad-b6ec-2a0733c2805a.txt
