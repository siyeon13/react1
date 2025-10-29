import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  postService: PostService;

  constructor(postService: PostService) {
    this.postService = postService;
  }

  @Get()
  getAllPost() {
    console.log('getAllPost');
    return this.postService.getAllPost();
  }

  @Get('/:id')
  getPost(@Param('id') id: string) {
    console.log(`[id: ${id}] 게시글 하나 가져오기`);
    return this.postService.getPost(id);
  }

  @Post()
  createPost(@Body() post: any): any {
    console.log(post);
    this.postService.createPost(post);
    return post;
  }

  @Delete('/:id')
  deletePost(@Param('id') id: string) {
    console.log(`[id: ${id}] 게시글 삭제`);
    this.postService.delete(id);
    return 'success';
  }

  @Put('/:id')
  updatePost(@Param('id') id: string, @Body() post: any) {
    console.log(`[id: ${id}] 게시글 수정`);
    return this.postService.updatePost(id, post);
  }
}
