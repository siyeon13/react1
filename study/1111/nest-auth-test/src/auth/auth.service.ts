import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async register(userDto: CreateUserDto) {
    const user = await this.userService.getUser(userDto.email); // 사용자 정보 가져옴
    if (user) {
      throw new HttpException(
        '해당 유저가 이미 있습니다.',
        HttpStatus.BAD_REQUEST,
      );
    }

    // hashSync: 비밀번호를 되돌릴 수 없는 형태로 안전하게 변환하는 함수(해시 함수)
    const encryptedPassword = bcrypt.hashSync(userDto.password, 10);

    try {
      const user = await this.userService.createUser({
        ...userDto,
        password: encryptedPassword,
      });
      user.password = '';
      return user;
    } catch (error) {
      throw new HttpException('서버 에러', 500);
    }
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.getUser(email);
    if (!user) {
      return null;
    }

    const { password: hashedPassword, ...userInfo } = user;
    console.log('-- hashedPassword, password --');
    console.log(hashedPassword, password);
    if (bcrypt.compareSync(password, hashedPassword)) {
      console.log(userInfo); // userInfo 에는 password는 따로 빼서 hashedPassword 저장해서 패스워드는 빠져있다.
      return userInfo;
    }
    return null;
  }
}
