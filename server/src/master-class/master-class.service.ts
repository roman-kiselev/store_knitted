import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { DatabaseService } from 'src/database/database.service';
import { FilesMasterClass } from 'src/files-master-class/files-master-class.model';
import { FilesService } from 'src/files/files.service';
import { PatternParams } from 'src/pattern-params/pattern-params.model';
import { CreateMasterClassDto } from './dto/create-master-class.dto';
import { MasterClassViewDto } from './dto/create-view-master-class.dto';
import { FindMasterClassDto } from './dto/find-master-class.dto';
import { FormMasterClass } from './dto/form-master-class.dto';
import { IFiles } from './interfaces/IFiles';
import { IGetAllWithPagination } from './interfaces/IGetAllWithPagination';
import { IParamsPatterns } from './interfaces/IParamsPatterns';
import { MasterClassView } from './master-class-view.model';
import { MasterClass } from './master-class.model';

@Injectable()
export class MasterClassService {
  constructor(
    @InjectModel(MasterClass) private masterClassRepository: typeof MasterClass,
    @InjectModel(PatternParams) private patternParams: typeof PatternParams,
    @InjectModel(FilesMasterClass)
    private filesMasterClassRepository: typeof FilesMasterClass,
    @InjectModel(MasterClassView)
    private masterClassViewRepository: typeof MasterClassView,
    private filesService: FilesService,
    private databaseService: DatabaseService,
  ) {}

  // Создаём мастер класс
  async create(dto: CreateMasterClassDto, files: IFiles) {
    try {
      const { nameEng, nameRu, params, priceEng, priceRu } = dto;
      const { fileEng, fileRu, mainImage } = files;
      const paramsArr: IParamsPatterns[] = JSON.parse(params);

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
          console.log(item);
          const paramsPattern = await this.patternParams.create({
            valueEng: item.nameEng,
            valueRu: item.nameRu,
            masterClassId: pattern.id,
          });
          console.log(item);
        }
      }

      const pathFiles = await this.filesService.addFilesForPattern(files);

      if (pathFiles && pattern) {
        const { pathFileEng, pathFileRu, pathMainImage } = pathFiles;

        const filesMasterClass = await this.filesMasterClassRepository.create(
          {
            mainImg: pathMainImage,
            nameRu: pathFileRu,
            nameEng: pathFileEng ? pathFileEng : null,
            masterClassId: pattern.id,
          },
          { raw: true },
        );
      }

      const allPattern = await this.masterClassRepository.findByPk(pattern.id, {
        include: { all: true },
      });

      return allPattern;
    } catch (e) {
      console.log(e);
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllMasterClass(dto: IGetAllWithPagination) {
    try {
      const { currentPage, offset, limit } = dto;
      const curentOffset = currentPage * offset - offset;
      const count = await this.masterClassRepository.count();
      const allMasterClass = await this.masterClassRepository.findAll({
        include: [
          {
            model: PatternParams,
          },
          {
            model: FilesMasterClass,
          },
        ],
        limit: limit === 0 ? 6 : limit,
        offset: curentOffset,
      });
      return { count: count, rows: allMasterClass };
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

  async formPatternsAndSendEmail(dto: FormMasterClass) {
    try {
      const file = await this.filesService.copyFile(
        dto.patterns[1].files.nameEng,
      );

      await this.filesService.preparePdfFile(
        dto.email,
        dto.patterns[1].files.nameEng,
      );
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async viewPattern(dto: MasterClassViewDto) {
    try {
      console.log(dto);
      const masterClass = await this.masterClassRepository.findByPk(
        dto.masterClassId,
      );
      const checkViewMasterClass = await this.masterClassViewRepository.create({
        userTempId: dto.userTempId,
        masterClassId: masterClass.id,
      });

      if (checkViewMasterClass) {
        return checkViewMasterClass;
      }
      if (!masterClass) {
        throw new HttpException('Мастер класс не найден', HttpStatus.NOT_FOUND);
      }

      const viewMasterClass = await this.masterClassViewRepository.create({
        userTempId: dto.userTempId,
        masterClassId: masterClass.id,
      });
      return viewMasterClass;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllMasterClassByName(dto: FindMasterClassDto) {
    console.log(dto);
    try {
      const currentOffset =
        Number(dto.page) * Number(dto.offset) - Number(dto.offset);
      const replacements = {
        name: dto.name,
        limit: Number(dto.limit) === 0 ? 6 : Number(dto.limit),
        offset: currentOffset,
      };
      const query = `
      SELECT * FROM store.\`master-class\`
      where nameRu LIKE CONCAT('%',:name,'%') OR nameEng LIKE CONCAT('%',:name,'%')
      limit :limit
      offset :offset;
      `;

      // const test = await this.databaseService.executeQuery(query, replacements);
      // const count = await this.masterClassRepository.count();
      const dataCount = await this.masterClassRepository.findAll({
        where: {
          [Op.or]: {
            nameRu: {
              [Op.like]: `%${dto.name}%`,
            },
            nameEng: {
              [Op.like]: `%${dto.name}%`,
            },
          },
        },
        include: [
          {
            model: PatternParams,
          },
          {
            model: FilesMasterClass,
          },
        ],
      });
      const data = await this.masterClassRepository.findAll({
        where: {
          [Op.or]: {
            nameRu: {
              [Op.like]: `%${dto.name}%`,
            },
            nameEng: {
              [Op.like]: `%${dto.name}%`,
            },
          },
        },
        include: [
          {
            model: PatternParams,
          },
          {
            model: FilesMasterClass,
          },
        ],
        limit: replacements.limit,
        offset: replacements.offset,
      });

      return { count: dataCount.length, rows: data };
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
