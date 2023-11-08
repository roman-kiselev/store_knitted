import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMasterClassDto } from './dto/create-master-class.dto';
import { MasterClass } from './master-class.model';

@Injectable()
export class MasterClassService {
  constructor(
    @InjectModel(MasterClass) private masterClassRepository: typeof MasterClass,
  ) {}

  // Создаём мастер класс
  async create(dto: CreateMasterClassDto) {
    try {
      // Провверяем мастер класс
      const isMasterClass = await this.masterClassRepository.findOne({
        where: { name: dto.name },
      });
      if (isMasterClass) {
        throw new HttpException(
          'Мастер класс с таким наименованием уже существует',
          HttpStatus.BAD_REQUEST,
        );
      }

      const masterClass = await this.masterClassRepository.create(dto);
      if (!masterClass) {
        throw new HttpException(
          'Не удалось создать мастер класс',
          HttpStatus.BAD_REQUEST,
        );
      }

      return masterClass;
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
