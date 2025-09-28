import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Animal } from '@prisma/client';
import { CreateAnimalsDto } from './dto/animals.dto';

@Injectable()
export class AnimalsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAnimals(): Promise<Animal[]> {
    return this.prisma.animal.findMany();
  }

  async getAnimalById(id: string): Promise<Animal | null> {
    return this.prisma.animal.findUnique({
      where: { id: id },
    });
  }

  async createAnimal(dto: CreateAnimalsDto): Promise<Animal> {
    return this.prisma.animal.create({
      data: dto,
    });
  }

  async updateAnimal(id: string, kind: string, name: string): Promise<Animal> {
    return this.prisma.animal.update({
      where: { id },
      data: { kind, name },
    });
  }

  async deleteAnimal(id: string): Promise<Animal> {
    return this.prisma.animal.delete({
      where: { id },
    });
  }
}
