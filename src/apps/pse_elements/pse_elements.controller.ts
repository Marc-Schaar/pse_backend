import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PseElementsService } from './pse_elements.service';
import { CreatePseElementDto } from './dto/create-pse_element.dto';
import { UpdatePseElementDto } from './dto/update-pse_element.dto';

@Controller('api/pse-elements')
export class PseElementsController {
  constructor(private readonly pseElementsService: PseElementsService) {}

  /**
   * Creates a new PseElement.
   * @param createPseElementDto - Data Transfer Object containing the details of the element to create.
   * @returns The created element.
   */
  @Post()
  create(@Body() createPseElementDto: CreatePseElementDto) {
    return this.pseElementsService.create(createPseElementDto);
  }

  /**
   * Retrieves all PseElements.
   * @returns An array of all elements.
   */
  @Get()
  findAll() {
    return this.pseElementsService.findAll();
  }

  /**
   * Retrieves a single element by its ID.
   * @param id - The ID of the element to retrieve.
   * @returns The element with the specified ID.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pseElementsService.findOne(+id);
  }

  /**
   * Updates an existing element by its ID.
   * @param id - The ID of the element to update.
   * @param updatePseElementDto - Data Transfer Object containing the updated element data.
   * @returns The updated element.
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePseElementDto: UpdatePseElementDto,
  ) {
    return this.pseElementsService.update(+id, updatePseElementDto);
  }

  /**
   * Deletes an element by its ID.
   * @param id - The ID of the element to delete.
   * @returns Confirmation of the deletion.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pseElementsService.remove(+id);
  }
}
