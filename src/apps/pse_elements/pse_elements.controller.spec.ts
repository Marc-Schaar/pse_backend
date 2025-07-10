import { Test, TestingModule } from '@nestjs/testing';
import { PseElementsController } from './pse_elements.controller';
import { PseElementsService } from './pse_elements.service';

describe('PseElementsController', () => {
  let controller: PseElementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PseElementsController],
      providers: [PseElementsService],
    }).compile();

    controller = module.get<PseElementsController>(PseElementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
