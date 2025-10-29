import { Injectable } from '@nestjs/common';
import { PostDto } from './post.model';
import { PostRepositoryImpl } from './post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepositoryImpl) {}

  async getAllPost(): Promise<PostDto[]> {
    return await this.postRepository.getAllPost();
  }

  getPost(id: string) {
    return this.postRepository.getPost(id);
  }

  createPost(postDto: PostDto) {
    this.postRepository.createPost(postDto);
  }

  delete(id: string) {
    this.postRepository.delete(id);
  }

  updatePost(id: string, postDto: PostDto) {
    this.postRepository.updatePost(id, postDto);
  }
}
