import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  // Helps to transform values coming in to be parsed as number
  @IsOptional()
  // @Type(() => Number) this is removed in favor of global pipe transformation. Look at app module for pipes
  @IsPositive()
  limit: number;

  @IsOptional()
  @IsPositive()
  // @Type(() => Number)
  offset: number;
}
