import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PseElementModule } from './pse_element/pse_element.module';

@Module({
  imports: [PseElementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
