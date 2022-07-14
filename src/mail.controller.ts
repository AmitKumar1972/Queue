import { Controller, Post, Query } from '@nestjs/common';
import { SendgridService } from './sendgrid.service';

@Controller()
export class MailController {
  constructor(private readonly sendgridService: SendgridService) {}

  @Post('send')
  async sendEmail(@Query('email') email: any) {
    const mail = {
      to: email,
      subject: 'Greeting Message from NestJS Sendgrid',
      from: 'rajatj@gluelabs.com',
      text: 'NestJs starting mail',
      html: '<h1>Hello World from NestJs</h1>',
    };

    return await this.sendgridService.send(mail);
  }
}
