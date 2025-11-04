import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Post } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
//import { PostRepositoryImpl } from './post.repository';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  // 데이터 모두 찾기 + 페이지네이션
  async paginate(page = 1, limit = 10, search = '') {
    const q = search ? { title: { $regex: search, $options: 'i' } } : {};
    const total = await this.postModel.countDocuments(q);
    const data = await this.postModel
      .find(q)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return {
      data,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit) || 1,
      search,
    };
  }

  async findOne(id: string) {
    const post = await this.postModel.findById(id).lean();
    if (!post) throw new NotFoundException('Post not fount');
    return post;
  }

  create(dto: CreatePostDto) {
    return this.postModel.create(dto);
  }

  async update(id: string, dto: UpdatePostDto) {
    const post = await this.postModel.findByIdAndUpdate(id, dto, { new: true });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async delete(id: string) {
    const res = await this.postModel.findByIdAndDelete(id);
    if (!res) throw new NotFoundException('Post not found');
    return { delete: true };
  }
}
/* @Injectable()
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
 */
