//#region Imports

import { Injectable } from '@nestjs/common';

//#endregion

@Injectable()
export class AppService {
  public working(): string {
    return 'API working...';
  }
}
