import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { ParameterToys } from 'src/parametr-toys/parametr-toys.model';
import { ValueParameterController } from './value-parameter.controller';
import { ValueParameter } from './value-parameter.model';
import { ValueParameterService } from './value-parameter.service';

@Module({
  controllers: [ValueParameterController],
  providers: [ValueParameterService],
  imports: [
    SequelizeModule.forFeature([ValueParameter, ParameterToys]),
    AuthModule,
  ],
})
export class ValueParameterModule {}
