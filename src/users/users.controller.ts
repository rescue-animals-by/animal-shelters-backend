import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put, UsePipes, ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';
import { CreateUsersDto } from './dto/users.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<UserModel[]> {
    return this.usersService.getUsers();
  }

  @Get()
  async getUserById(@Param('id') id: string): Promise<UserModel | null> {
    return this.usersService.getUserById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiResponse({
    status: 201,
    description: 'User has been successfully created',
  })
  async createUser(@Body() dto: CreateUsersDto): Promise<UserModel> {
    return this.usersService.createUser(dto);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
  ): Promise<UserModel> {
    return this.usersService.updateUser(
      id,
      email,
      password,
      firstName,
      lastName,
    );
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.deleteUser(id);
  }
}
