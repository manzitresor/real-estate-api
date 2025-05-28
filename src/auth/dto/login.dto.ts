import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'manzi@gmail.com',
    required: true,
  })
  @IsNotEmpty()
  email: string;
  @ApiProperty({
    example: 'manzi@123',
    required: true,
  })
  @IsNotEmpty()
  password: string;
}
