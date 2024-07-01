import { Logger, MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { APP_FILTER } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { DatabaseModule } from './database/database.module';
import { HttpExceptionFilter } from './exception-filters/http.exception-filter';
import { FilesMasterClassModule } from './files-master-class/files-master-class.module';
import { FilesModule } from './files/files.module';
import { ImagesMasterClassModule } from './images-master-class/images-master-class.module';
import { MailModule } from './mail/mail.module';
import { MasterClassModule } from './master-class/master-class.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { ParametrToysModule } from './parametr-toys/parametr-toys.module';
import { PatternParamsModule } from './pattern-params/pattern-params.module';
import { PaymentModule } from './payment/payment.module';
import { RoleModule } from './role/role.module';
import { StaticFilesModule } from './static-files/static-files.module';
import { TempUserModule } from './temp-user/temp-user.module';
import { ToysModule } from './toys/toys.module';
import { UserModule } from './user/user.module';
import { ValueParameterModule } from './value-parameter/value-parameter.module';

// console.log(process.env.MYSQL_HOST);
// console.log(process.env.MYSQL_PORT);
// console.log(process.env.MYSQL_USERNAME);
// console.log(process.env.MYSQL_PASSWORD);
// console.log(process.env.MYSQL_DATABASE);
// console.log(process.env.NODE_ENV);
@Module({
  imports: [
    // MulterModule.register({
    //   dest: '/uploads',
    // }),
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
    PatternParamsModule,
    MailModule,
    TempUserModule,
    CartModule,
    ToysModule,
    DatabaseModule,
    StaticFilesModule,
  ],
  controllers: [],
  providers: [
    Logger,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
