import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './posts/post.controller';
import { PostService } from './posts/post.service';
import { Post, PostSchema } from './posts/schemas/post.schema';
//import { PostRepositoryImpl } from './posts/post.repository';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';

// @Module({
@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/blog'),
    // MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI || ''),
    PostsModule,
  ],
  // controllers: [PostController],
  // providers: [PostService, PostRepositoryImpl],
})
export class AppModule {}
