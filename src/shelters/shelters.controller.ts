import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SheltersService } from './shelters.service';
import { Shelter as ShelterModel } from '@prisma/client';
import { ApiResponse } from '@nestjs/swagger';
import { CreateSheltersDto } from './dto/shelters.dto';

@Controller('shelters')
export class SheltersController {
  constructor(private readonly sheltersService: SheltersService) {}

  @Get()
  async getShelters(): Promise<ShelterModel[]> {
    return this.sheltersService.getShelters();
  }

  @Get(':id')
  async getShelterById(@Param('id') id: string): Promise<ShelterModel | null> {
    return this.sheltersService.getShelterById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiResponse({
    status: 201,
    description: 'Shelter has been successfully created',
  })
  async createShelter(@Body() dto: CreateSheltersDto) {
    return this.sheltersService.createShelter(dto);
  }

  @Put(':id')
  async updateShelter(@Param('id') id: string, @Body('name') name: string) {
    return this.sheltersService.updateShelter(id, name);
  }

  @Delete(':id')
  async deleteShelter(@Param('id') id: string) {
    return this.sheltersService.deleteShelter(id);
  }
}
