export class ImagesMasterClassDto {
  readonly mainImgName: Express.Multer.File;
  readonly fileNameRu: Express.Multer.File;
  readonly fileNameEng: Express.Multer.File;
  readonly masterClassId: number;
}
