/* import { Injectable } from '@nestjs/common';
import { PostDto } from './post.model';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { Model } from 'mongoose';

export interface PostRepository {
  getAllPost(): Promise<PostDto[]>;
  getPost(id: string): Promise<PostDto>;
  createPost(postDto: PostDto);
  delete(id: string): Promise<void>;
  updatePost(id: string, postDto: PostDto): Promise<PostDto>;
}

@Injectable()
export class PostRepositoryImpl implements PostRepository {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {
    this.postModel = postModel;
  }

  getAllPost(): Promise<PostDto[]> {
    return this.postModel.find().exec();
  }

  getPost(id: string): Promise<PostDto> {
    return this.postModel.findById(id).exec() as Promise<PostDto>;
  }

  async createPost(postDto: PostDto) {
    const createdPost = {
      ...postDto,
      createdDt: new Date(),
      updatedDt: new Date(),
    };
    await this.postModel.create(createdPost);
  }

  delete(id: string): Promise<void> {
    this.postModel.findByIdAndUpdate(id).exec();
    return Promise.resolve();
  }

  async updatePost(id: string, postDto: PostDto): Promise<PostDto> {
    const updatedPost = {
      ...postDto,
      updatedDt: new Date(),
    };
    await this.postModel.findByIdAndUpdate(id, updatedPost).exec();
    return updatedPost;
  }
}
 */
