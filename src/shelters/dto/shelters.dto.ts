import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSheltersDto {
  @IsString()
  @ApiProperty({
    example: 'soul.home',
    required: true,
  })
  name: string;
}
