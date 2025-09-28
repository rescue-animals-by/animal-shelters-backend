import { Module } from '@nestjs/common';
import { SheltersService } from './shelters.service';
import { SheltersController } from './shelters.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [SheltersController],
  providers: [SheltersService, PrismaService],
})
export class SheltersModule {}
