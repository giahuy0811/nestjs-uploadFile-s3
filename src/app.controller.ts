/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { FilesService } from './file.service';


class createFileDto {
  fileBuffer: Buffer
  fileName: string
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
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {

    console.log("file", file)
    console.log("fileBuffer", file.buffer)
    return this.fileService.uploadFile(file.buffer, file.originalname)
  }

  @Post('test/upload')
  async createFile(@Body() createFileDto: createFileDto) {
    console.log("createFileDto", createFileDto)

    return "201"
  }
}
