import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {
  @IsString()
  @ApiProperty({
    example: 'email@gmail.com',
    required: true,
  })
  email: string;

  @IsString()
  @ApiProperty({
    example: 'somePassword',
    required: true,
  })
  password: string;

  @IsString()
  @ApiProperty({
    example: 'Evgeniy',
    required: true,
  })
  firstName: string;

  @IsString()
  @ApiProperty({
    example: 'Phadeev',
    required: true,
  })
  lastName: string;

  @IsString()
  @ApiProperty({
    example: 'volunteer',
    required: true,
  })
  role: string;

  @IsString()
  @ApiProperty({
    example: 'some uuid',
    required: false,
  })
  shelterId: string;
}
