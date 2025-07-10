import { Module } from '@nestjs/common';
import { PseElementsService } from './pse_elements.service';
import { PseElementsController } from './pse_elements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PseElement } from './entities/pse_element.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PseElement])],
  controllers: [PseElementsController],
  providers: [PseElementsService],
})
export class PseElementsModule {}
