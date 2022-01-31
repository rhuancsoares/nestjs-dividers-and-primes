import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('decompor/numero/:numero')
  decompor(@Param('numero') numero: number): any {
    return this.appService.decompor(numero);
  }
}
