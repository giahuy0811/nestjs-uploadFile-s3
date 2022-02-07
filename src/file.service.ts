/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { S3 } from "aws-sdk";

@Injectable()

export class FilesService {
  constructor(
    private readonly configService: ConfigService
  ) { }

  async uploadFile(dataBuffer: Buffer, filename: string) {

    const s3 = new S3()

    const uploadResult = s3.upload({
      Bucket: this.configService.get("AWS_PUBLIC_BUCKET_NAME"),
      Body: dataBuffer,
      Key: filename
    }).promise()
    console.log("uploadResult", (await uploadResult))
    console.log("uploadResult", (await uploadResult).Location)
    return uploadResult
  }
}