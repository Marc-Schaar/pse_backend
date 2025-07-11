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

  @Post()
  create(@Body() createPseElementDto: CreatePseElementDto) {
    return this.pseElementsService.create(createPseElementDto);
  }

  @Get()
  findAll() {
    return this.pseElementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pseElementsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePseElementDto: UpdatePseElementDto,
  ) {
    return this.pseElementsService.update(+id, updatePseElementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pseElementsService.remove(+id);
  }
}
