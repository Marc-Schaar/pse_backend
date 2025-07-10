import { PartialType } from '@nestjs/mapped-types';
import { CreatePseElementDto } from './create-pse_element.dto';

export class UpdatePseElementDto extends PartialType(CreatePseElementDto) {}
