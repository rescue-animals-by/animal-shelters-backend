import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAnimalsDto {
  @IsString()
  @ApiProperty({
    example: 'cat',
    required: true,
  })
  kind: string;

  @IsString()
  @ApiProperty({
    example: 'Flash',
    required: true,
  })
  name: string;
}
