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
import { AnimalsService } from './animals.service';
import { Animal as AnimalModel } from '@prisma/client';
import { ApiResponse } from '@nestjs/swagger';
import { CreateAnimalsDto } from './dto/animals.dto';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Get()
  async getAnimals(): Promise<AnimalModel[]> {
    return this.animalsService.getAnimals();
  }

  @Get(':id')
  async getAnimalById(@Param('id') id: string) {
    return this.animalsService.getAnimalById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiResponse({
    status: 201,
    description: 'Shelter has been successfully created',
  })
  async createAnimal(@Body() dto: CreateAnimalsDto) {
    return this.animalsService.createAnimal(dto);
  }

  @Put(':id')
  async updateAnimal(
    @Param('id') id: string,
    @Body('kind') kind: string,
    @Body('name') name: string,
  ) {
    return this.animalsService.updateAnimal(id, kind, name);
  }

  @Delete(':id')
  async deleteAnimal(@Param('id') id: string) {
    return this.animalsService.deleteAnimal(id);
  }
}
