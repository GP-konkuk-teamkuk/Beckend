import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AudioService } from './audio.service';
import { AudioController } from './audio.controller';
import { Audio } from './entities/audio.entity';
import { User } from '../user/entities/user.entity';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

@Module({
  imports: [TypeOrmModule.forFeature([Audio, User]), SwaggerModule],
  providers: [AudioService],
  controllers: [AudioController],
})
export class AudioModule {}
