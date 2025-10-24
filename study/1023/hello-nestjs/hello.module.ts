import { Module } from "@nestjs/common";
import { HelloController } from "./hello.controller";
// 다 묶어주는 역할을 함
@Module({
  controllers: [HelloController],
})
export class HelloModule {}
