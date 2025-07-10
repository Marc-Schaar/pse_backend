import { Test, TestingModule } from '@nestjs/testing';
import { PseElementsService } from './pse_elements.service';

describe('PseElementsService', () => {
  let service: PseElementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PseElementsService],
    }).compile();

    service = module.get<PseElementsService>(PseElementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
