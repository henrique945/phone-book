//#region Imports

import { IsDefined, IsString } from 'class-validator';

//#endregion

export class CreateContactPayload {
  @IsDefined()
  @IsString()
  public firstName: string;

  @IsDefined()
  @IsString()
  public lastName: string;

  @IsDefined()
  @IsString()
  public phone: string;
}
