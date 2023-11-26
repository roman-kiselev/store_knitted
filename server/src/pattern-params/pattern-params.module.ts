import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PatternParamsController } from './pattern-params.controller';
import { PatternParams } from './pattern-params.model';
import { PatternParamsService } from './pattern-params.service';

@Module({
  controllers: [PatternParamsController],
  providers: [PatternParamsService],
  imports: [SequelizeModule.forFeature([PatternParams])],
})
export class PatternParamsModule {}
