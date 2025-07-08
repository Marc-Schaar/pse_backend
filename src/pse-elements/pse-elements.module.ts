import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PseElementService } from './pse-element.service';
import { PseElementsController } from './pse-elements.controller';
import { PseElement } from './pse-element.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PseElement])],
  exports: [TypeOrmModule],
  providers: [PseElementService],
  controllers: [PseElementsController],
})
export class PseElementsModule {}
