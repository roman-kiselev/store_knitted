import { IsNotEmpty } from 'class-validator';

export class ImagesMasterClassDto {
  @IsNotEmpty()
  mainImgName: Express.Multer.File;
  @IsNotEmpty()
  fileNameRu: Express.Multer.File;
  @IsNotEmpty()
  fileNameEng: Express.Multer.File;
  @IsNotEmpty()
  masterClassId: number;
}
