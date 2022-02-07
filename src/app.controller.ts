/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { FilesService } from './file.service';

class PostDto {
  fileName: string;
  base64: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,

    private readonly fileService: FilesService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  async uploadFile(@Body() postDto: PostDto) {
    console.log("body", postDto)

    // return this.fileService.uploadFile(postDto, 'firstFile')
    return postDto
  }
}
