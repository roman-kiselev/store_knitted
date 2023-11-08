import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateParameterToysDto } from './dto/create-parameter-toys.dto';
import { ParameterToys } from './parametr-toys.model';

@Injectable()
export class ParametrToysService {
  constructor(
    @InjectModel(ParameterToys)
    private parametrToysRepository: typeof ParameterToys,
  ) {}

  async createParametr(dto: CreateParameterToysDto) {
    try {
      const checkName = await this.parametrToysRepository.findOne({
        where: { name: dto.name },
      });
      if (checkName) {
        throw new HttpException(
          'Параметр уже существует',
          HttpStatus.BAD_REQUEST,
        );
      }

      const parametr = await this.parametrToysRepository.create(dto);
      if (!parametr) {
        throw new HttpException(
          'Не удалось создать параметр',
          HttpStatus.BAD_REQUEST,
        );
      }
      return parametr;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllParameters() {
    try {
      const parameters = await this.parametrToysRepository.findAll({
        include: { all: true },
      });
      return parameters;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneParametersById(id: string) {
    try {
      const parametr = await this.parametrToysRepository.findByPk(id, {
        include: { all: true },
      });
      if (!parametr) {
        throw new HttpException('Параметр не найден', HttpStatus.NOT_FOUND);
      }
      return parametr;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // TODO добавить сервис для связывания с Value
}
