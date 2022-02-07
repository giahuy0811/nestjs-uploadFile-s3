/* eslint-disable prettier/prettier */
import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { FilesService } from './file.service';

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
  async uploadFile(@UploadedFile() file: Express.Multer.File) {

    console.log("file", file)
    console.log("fileBuffer", typeof file.buffer)
    return this.fileService.uploadFile(file.buffer, file.originalname)
  }
}
