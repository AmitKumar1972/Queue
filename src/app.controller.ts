import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { NameProducerService } from './name.producer.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private nameProducerService: NameProducerService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('send-message')
  async sendMessage(@Query('msg') msg: string) {
    this.nameProducerService.sendName(msg);
    return msg;
  }
}
