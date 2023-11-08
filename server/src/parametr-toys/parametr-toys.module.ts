import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { MasterClass } from 'src/master-class/master-class.model';
import { McParameterToys } from 'src/master-class/mc-parameter-toys.model';
import { ValueParameter } from 'src/value-parameter/value-parameter.model';
import { ParametrToysController } from './parametr-toys.controller';
import { ParameterToys } from './parametr-toys.model';
import { ParametrToysService } from './parametr-toys.service';

@Module({
  providers: [ParametrToysService],
  controllers: [ParametrToysController],
  imports: [
    SequelizeModule.forFeature([
      MasterClass,
      ParameterToys,
      McParameterToys,
      ValueParameter,
    ]),
    AuthModule,
  ],
})
export class ParametrToysModule {}
