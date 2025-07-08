import { Test, TestingModule } from '@nestjs/testing';
import { PseElementService } from './pse-element.service';

describe('PseElementService', () => {
  let service: PseElementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PseElementService],
    }).compile();

    service = module.get<PseElementService>(PseElementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
