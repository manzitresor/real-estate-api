import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(data: LoginDto): Promise<Omit<User, 'password'>> {
    const user = await this.usersRepository.findOne({
      where: { email: data.email },
    });

    if (!user) {
      throw new BadRequestException(
        'Invalid credential. Email or Password does not exist',
      );
    }

    const isPasswordValid = await this.usersRepository.findOne({
      where: { password: data.password },
    });

    if (!isPasswordValid) {
      throw new BadRequestException(
        'Invalid credential. Email or Password does not exist',
      );
    }
    const { password, ...withNoPassword } = user;
    return withNoPassword;
  }

  async signin(userData: LoginDto) {
    const user = await this.validateUser(userData);
    const payload = { email: user.email, user: user.id };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
