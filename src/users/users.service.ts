import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ConfigService } from '@nestjs/config';
import { CreateUsersDto } from './dto/users.dto';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  async createUser(dto: CreateUsersDto): Promise<User> {
    return this.prisma.user.create({
      data: dto,
    });
  }

  async updateUser(
    id: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: { email, password, firstName, lastName },
    });
  }

  async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
