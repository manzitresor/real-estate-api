import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    example: 'Beautiful House for Sale',
    required: true,
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 250000,
    required: true,
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 'This is a beautiful house located in the heart of the city.',
    required: true,
  })
  @IsString()
  content: string;

  @ApiProperty({
    example: 3,
    required: true,
  })
  @IsNumber()
  bedrooms: number;

  @ApiProperty({
    example: 2,
    required: true,
  })
  @IsNumber()
  bathrooms: number;

  @ApiProperty({
    example: 'Buy',
    required: true,
  })
  @IsString()
  type: string;

  @ApiProperty({
    example: ['image1.jpg', 'image2.jpg'],
    required: true,
  })
  @IsString({ each: true })
  images: string[];

  @ApiProperty({
    example: '123 Main St, Springfield, USA',
    required: true,
  })
  @IsString()
  address: string;

  @ApiProperty({
    example: 'Apartment',
    required: true,
  })
  @IsString()
  propertyType: string;

  @ApiProperty({
    example: 'Owner is responsible',
    required: true,
  })
  @IsString()
  utilitiesPolicy: string;
}
