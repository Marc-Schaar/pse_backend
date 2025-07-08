import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PseElement } from './pse-elements/pse-element.entity';
import { PseElementService } from './pse-elements/pse-element.service';
import { PseElementsModule } from './pse-elements/pse-elements.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [PseElement],
      synchronize: true,
    }),
    PseElementsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PseElementService],
})
export class AppModule {}
