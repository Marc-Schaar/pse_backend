import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePseElementDto } from './dto/create-pse_element.dto';
import { UpdatePseElementDto } from './dto/update-pse_element.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PseElement } from './entities/pse_element.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PseElementsService {
  constructor(
    @InjectRepository(PseElement)
    private readonly pseRepository: Repository<PseElement>,
  ) {}

  async create(createPseElementDto: CreatePseElementDto) {
    const pseElement = this.pseRepository.create(createPseElementDto);
    return await this.pseRepository.save(pseElement);
  }

  async findAll() {
    return await this.pseRepository.find();
  }

  async findOne(id: number) {
    return await this.pseRepository.findOneBy({ id });
  }

  async update(id: number, updatePseElementDto: UpdatePseElementDto) {
    const pseElement = await this.pseRepository.findOneBy({ id });
    if (!pseElement) {
      throw new NotFoundException();
    }
    Object.assign(pseElement, updatePseElementDto);
    return await this.pseRepository.save(pseElement);
  }

  async remove(id: number) {
    const pseElement = await this.pseRepository.findOneBy({ id });
    if (!pseElement) {
      throw new NotFoundException();
    }
    return await this.pseRepository.remove(pseElement);
  }
}
