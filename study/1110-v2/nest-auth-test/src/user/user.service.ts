import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return this.userRepository.save({ ...user, password: hashedPassword });
  }

  async validateUser(email: string, password: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) return false;
    return await bcrypt.compare(password, user.password); // 비밀번호 검증
  }

  async getUser(email: string): Promise<User> {
    const result = await this.userRepository.findOne({ where: { email } });
    return result as User;
  }

  async getAllUser(): Promise<User[]> {
    const result = await this.userRepository.find();
    return result as User[];
  }

  async updateUser(email: string, _user: UpdateUserDto): Promise<User> {
    const user = await this.getUser(email);
    if (!user) throw new Error('User not found');
    user.username = _user.username;
    user.password = _user.password;
    return await this.userRepository.save(user);
  }

  deleteUser(email: string) {
    return this.userRepository.delete({ email });
  }
}
