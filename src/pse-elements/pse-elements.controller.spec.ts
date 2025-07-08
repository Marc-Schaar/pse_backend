import { Test, TestingModule } from '@nestjs/testing';
import { PseElementsController } from './pse-elements.controller';

describe('PseElementsController', () => {
  let controller: PseElementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PseElementsController],
    }).compile();

    controller = module.get<PseElementsController>(PseElementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
