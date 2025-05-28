import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  create(@Body() createAuthDto: LoginDto) {
    console.log('Received request:', createAuthDto);
    return this.authService.signin(createAuthDto);
  }
}
