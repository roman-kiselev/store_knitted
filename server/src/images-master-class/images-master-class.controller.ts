import {
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { ImagesMasterClassService } from './images-master-class.service';
import { editFileName, imageFileFilter } from './images-master-class.utils';

@ApiTags('ImagesMasterClass')
@Controller('images-master-class')
export class ImagesMasterClassController {
  constructor(private imagesMasterClassService: ImagesMasterClassService) {}

  @Get('/')
  hello() {
    console.log('Hello');
  }

  // @Post('/')
  // @UseInterceptors(FilesInterceptor('images'))
  // uploadImages(@UploadedFiles() files: Array<Express.Multer.File>) {
  //   console.log(files);
  // }

  @Post('/')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Query('id') id: number,
  ) {
    // return this.imagesMasterClassService.createImage({
    //   file,
    //   masterClassId: id,
    // });
  }
}
