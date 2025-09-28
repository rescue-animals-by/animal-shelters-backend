import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Shelter } from '@prisma/client';
import { CreateSheltersDto } from './dto/shelters.dto';

@Injectable()
export class SheltersService {
  constructor(private readonly prisma: PrismaService) {}

  async getShelters(): Promise<Shelter[]> {
    return this.prisma.shelter.findMany();
  }

  async getShelterById(id: string): Promise<Shelter | null> {
    return this.prisma.shelter.findUnique({
      where: { id: id },
    });
  }

  async createShelter(dto: CreateSheltersDto): Promise<Shelter> {
    return this.prisma.shelter.create({
      data: dto,
    });
  }

  async updateShelter(id: string, name: string): Promise<Shelter> {
    return this.prisma.shelter.update({
      where: { id },
      data: { name },
    });
  }

  async deleteShelter(id: string): Promise<Shelter> {
    return this.prisma.shelter.delete({
      where: { id },
    });
  }
}
