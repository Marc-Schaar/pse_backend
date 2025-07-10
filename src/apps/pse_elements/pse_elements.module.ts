import { Module } from '@nestjs/common';
import { PseElementsService } from './pse_elements.service';
import { PseElementsController } from './pse_elements.controller';

@Module({
  controllers: [PseElementsController],
  providers: [PseElementsService],
})
export class PseElementsModule {}
