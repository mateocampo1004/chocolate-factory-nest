import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';

import configuration from './config/configuration';
import { validationSchema } from './config/validationSchema';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema,
      isGlobal: true,
    }),
    EmployeesModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
