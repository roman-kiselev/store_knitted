import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateValueParameterDto } from './dto/create-value-parametr.dto';
import { ValueParameter } from './value-parameter.model';

@Injectable()
export class ValueParameterService {
  constructor(
    @InjectModel(ValueParameter)
    private valueParameterRepository: typeof ValueParameter,
  ) {}

  async createValue(dto: CreateValueParameterDto) {
    try {
      const { name, parameterToysId } = dto;
      const checkValue = await this.valueParameterRepository.findOne({
        where: {
          name,
          parameterToysId,
        },
      });
      if (checkValue) {
        throw new HttpException(
          'У параметра уже есть такое значение',
          HttpStatus.BAD_REQUEST,
        );
      }
      const newValue = await this.valueParameterRepository.create(dto);
      if (!newValue) {
        throw new HttpException('Не удалось создать', HttpStatus.BAD_REQUEST);
      }

      return newValue;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllValue() {
    try {
      const allValues = await this.valueParameterRepository.findAll({
        include: { all: true },
      });
      return allValues;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllForParametr(idParametr: string) {
    try {
      const allValue = await this.valueParameterRepository.findAll({
        where: {
          parameterToysId: idParametr,
        },
        include: { all: true },
      });
      return allValue;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
