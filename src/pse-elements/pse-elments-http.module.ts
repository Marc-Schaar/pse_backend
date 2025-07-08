import { Module } from '@nestjs/common';
import { PseElementsModule } from './pse-elements.module';
import { PseElementService } from './pse-element.service';
import { PseElementsController } from './pse-elements.controller';

@Module({
  imports: [PseElementsModule],
  providers: [PseElementService],
  controllers: [PseElementsController],
})
export class UserHttpModule {}
