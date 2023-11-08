import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { FilesMasterClassModule } from './files-master-class/files-master-class.module';
import { FilesModule } from './files/files.module';
import { ImagesMasterClassModule } from './images-master-class/images-master-class.module';
import { MasterClassModule } from './master-class/master-class.module';
import { ParametrToysModule } from './parametr-toys/parametr-toys.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { ValueParameterModule } from './value-parameter/value-parameter.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    MulterModule.register({
      dest: '/upload',
    }),

    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      models: [],
      autoLoadModels: true,
      synchronize: true,
      //sync: { force: true },
    }),
    UserModule,
    AuthModule,
    RoleModule,
    MasterClassModule,
    ImagesMasterClassModule,
    ParametrToysModule,

    FilesMasterClassModule,

    ValueParameterModule,

    FilesModule,

    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
