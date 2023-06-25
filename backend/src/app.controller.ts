//#region Imports

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//#endregion

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  public getHello(): string {
    return this.appService.working();
  }
}