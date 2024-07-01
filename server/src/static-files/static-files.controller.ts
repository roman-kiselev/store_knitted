import { Controller, Get, Param, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { ImageFilterGuard } from './guards/image-filter.guard';

@Controller('uploads')
export class StaticFilesController {
  constructor() {}

  @Get('/:filename')
  @UseGuards(ImageFilterGuard)
  getStaticFile(@Param('filename') filename: string, @Res() res: Response) {
    console.log(filename);
    const filePath = join(
      __dirname,
      '..',
      '..',
      'uploads',
      'pattern',
      filename,
    );
    return res.sendFile(filePath);
  }
}
