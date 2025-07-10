import { Injectable } from '@nestjs/common';
import { CreatePseElementDto } from './dto/create-pse_element.dto';
import { UpdatePseElementDto } from './dto/update-pse_element.dto';

@Injectable()
export class PseElementsService {
  create(createPseElementDto: CreatePseElementDto) {
    return 'This action adds a new pseElement';
  }

  findAll() {
    return `This action returns all pseElements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pseElement`;
  }

  update(id: number, updatePseElementDto: UpdatePseElementDto) {
    return `This action updates a #${id} pseElement`;
  }

  remove(id: number) {
    return `This action removes a #${id} pseElement`;
  }
}
