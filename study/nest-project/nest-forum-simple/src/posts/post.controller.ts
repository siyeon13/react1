import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Query,
  Redirect,
  Render,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postsService: PostService) {}

  // 리스트 페이지 (페이지네이션 + 검색)
  @Get()
  @Render('posts/list')
  async list(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
  ) {
    const p = Number(page) || 1;
    const l = Number(limit) || 10;
    return await this.postsService.paginate(p, l, search || '');
  }

  // 상세페이지
  @Get(':id')
  @Render('posts/detail')
  async detail(@Param('id') id: string) {
    const post = await this.postsService.findOne(id);
    return { post, id };
  }

  // 생성
  @Post()
  @Redirect('/posts')
  async create(@Body() dto: CreatePostDto) {
    await this.postsService.create(dto);
  }

  // 수정
  @Post(':id')
  @Redirect()
  async update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    await this.postsService.update(id, dto);
  }

  // 삭제
  @Post(':id/delete')
  @Redirect('/posts')
  async remove(@Param('id') id: string) {
    await this.postsService.delete(id);
  }

  /* @Get()
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
  } */
}
