import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { RequestWithUser } from 'src/auth/types/request-with-user';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
// import { RolesGuard } from 'src/guards/roles.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@Controller('posts')
@ApiTags('Posts')
@ApiBearerAuth()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto, @Req() req: RequestWithUser) {
    return this.postsService.create(req.user.id, createPostDto);
  }
}
