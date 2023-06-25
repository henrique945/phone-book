//#region Imports

import { IsOptional, IsString } from 'class-validator';

//#endregion

export class UpdateContactPayload {
  @IsOptional()
  @IsString()
  public firstName?: string;

  @IsOptional()
  @IsString()
  public lastName?: string;

  @IsOptional()
  @IsString()
  public phone?: string;
}
