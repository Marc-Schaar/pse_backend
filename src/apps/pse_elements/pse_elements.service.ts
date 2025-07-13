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

  /**
   * Creates a new element entry in the database.
   * @param createPseElementDto DTO containing data for the new element.
   * @returns The saved element entity.
   */
  async create(createPseElementDto: CreatePseElementDto) {
    const pseElement = this.pseRepository.create(createPseElementDto);
    return await this.pseRepository.save(pseElement);
  }

  /**
   * Retrieves a list of all elements with selected fields.
   * @returns Array of element entities.
   */
  async findAll() {
    return this.pseRepository.find({
      select: [
        'id',
        'symbol',
        'name',
        'ordnungszahl',
        'kategorie',
        'periode',
        'gruppe',
      ],
    });
  }

  /**
   * Retrieves a single element by its ID.
   * @param id Identifier of the element.
   * @returns The found element or null if not found.
   */
  async findOne(id: number) {
    return await this.pseRepository.findOneBy({ id });
  }

  /**
   * Updates an existing element by its ID.
   * Throws NotFoundException if the element does not exist.
   * @param id Identifier of the element to update.
   * @param updatePseElementDto DTO containing updated data.
   * @returns The updated element entity.
   */
  async update(id: number, updatePseElementDto: UpdatePseElementDto) {
    const pseElement = await this.pseRepository.findOneBy({ id });
    if (!pseElement) {
      throw new NotFoundException();
    }
    Object.assign(pseElement, updatePseElementDto);
    return await this.pseRepository.save(pseElement);
  }

  /**
   * Deletes an element by its ID.
   * Throws NotFoundException if the element does not exist.
   * @param id Identifier of the element to delete.
   * @returns The removed element entity.
   */
  async remove(id: number) {
    const pseElement = await this.pseRepository.findOneBy({ id });
    if (!pseElement) {
      throw new NotFoundException();
    }
    return await this.pseRepository.remove(pseElement);
  }
}
