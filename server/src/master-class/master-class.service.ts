import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { FilesMasterClass } from 'src/files-master-class/files-master-class.model';
import { FilesService } from 'src/files/files.service';
import { PatternParams } from 'src/pattern-params/pattern-params.model';
import { CreateMasterClassDto } from './dto/create-master-class.dto';
import { IFiles } from './interfaces/IFiles';
import { IParamsPatterns } from './interfaces/IParamsPatterns';
import { MasterClass } from './master-class.model';

@Injectable()
export class MasterClassService {
  constructor(
    @InjectModel(MasterClass) private masterClassRepository: typeof MasterClass,
    @InjectModel(PatternParams) private patternParams: typeof PatternParams,
    @InjectModel(FilesMasterClass)
    private filesMasterClassRepository: typeof FilesMasterClass,
    private filesService: FilesService,
  ) {}

  // Создаём мастер класс
  async create(dto: CreateMasterClassDto, files: IFiles) {
    try {
      const { nameEng, nameRu, params, priceEng, priceRu } = dto;
      const { fileEng, fileRu, mainImage } = files;
      const paramsArr: IParamsPatterns[] = JSON.parse(params);
      console.log(paramsArr.length);

      // Проверяем наименование
      const isName = await this.masterClassRepository.findOne({
        where: {
          [Op.or]: [{ nameEng }, { nameRu }],
        },
      });
      if (isName) {
        throw new HttpException(
          'Мастер класс с таким наименованием уже существует',
          HttpStatus.BAD_REQUEST,
        );
      }
      // Создаем мастер класс
      const pattern = await this.masterClassRepository.create({
        nameEng,
        nameRu,
        priceEng,
        priceRu,
      });

      if (paramsArr.length > 0 && pattern) {
        for (const item of paramsArr) {
          const paramsPattern = await this.patternParams.create({
            valueEng: item.nameEng,
            valueRu: item.nameRu,
            masterClassId: pattern.id,
          });
        }
      }

      const pathFiles = await this.filesService.addFilesForPattern(files);

      if (pathFiles && pattern) {
        const { pathFileEng, pathFileRu, pathMainImage } = pathFiles;

        const filesMasterClass = await this.filesMasterClassRepository.create({
          mainImg: pathMainImage,
          nameRu: pathFileRu,
          nameEng: pathFileEng ? pathFileEng : null,
          massterClassId: pattern.id,
        });
      }

      const allPattern = await this.masterClassRepository.findByPk(pattern.id, {
        include: { all: true },
      });

      return allPattern;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllMasterClass() {
    try {
      const allMasterClass = await this.masterClassRepository.findAll({
        include: { all: true },
      });
      return allMasterClass;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getOneMasterClassById(id: string) {
    try {
      const masterClass = await this.masterClassRepository.findByPk(id, {
        include: { all: true },
      });
      if (!masterClass) {
        throw new HttpException('Мастер класс не найден', HttpStatus.NOT_FOUND);
      }
      return masterClass;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
