import { ApiProperty } from '@nestjs/swagger';

export class CreateAudioBookDto {
  @ApiProperty({ description: 'ID of the book', example: 1 })
  bookId: number;

  @ApiProperty({ description: 'ID of the user', example: 1 })
  userId: number;
}
