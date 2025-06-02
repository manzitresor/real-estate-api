import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserRole } from 'src/util/role.enum';
import { UsersService } from 'src/users/users.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('signin')
  create(@Body() createAuthDto: LoginDto) {
    return this.authService.signin(createAuthDto);
  }
  @Post('signup')
  @ApiOperation({ summary: 'Create account' })
  @ApiResponse({
    status: 201,
    schema: {
      example: {
        message: 'User registered successfully',
        user: {
          id: 5,
          fullName: 'Tresor Manzi',
          email: 'manzitre@gmail.com',
          roles: UserRole.ADMIN,
        },
      },
    },
  })
  @ApiResponse({ status: 400, description: 'Bad request. Invalid inputs' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  signup(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
