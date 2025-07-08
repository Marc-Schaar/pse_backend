import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PseElement } from './pse-element.entity';

@Injectable()
export class PseElementService {
  constructor(
    @InjectRepository(PseElement)
    private pseElementRepository: Repository<PseElement>,
  ) {}

  findAll(): Promise<PseElement[]> {
    return this.pseElementRepository.find();
  }

  findOne(id: number): Promise<PseElement | null> {
    return this.pseElementRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.pseElementRepository.delete(id);
  }
}
