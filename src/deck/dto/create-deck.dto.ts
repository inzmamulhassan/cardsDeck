import { ApiProperty } from '@nestjs/swagger';

export class CreateDeckDto {
  @ApiProperty({ default: 'FULL', required: false })
  readonly type: string;

  @ApiProperty({ default: true, required: false })
  readonly shuffled: boolean;

  remaining: number;
  cards: object;
  readonly created_at: Date;
}
