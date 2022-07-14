import { Injectable } from '@nestjs/common';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class SendgridService {
  constructor() {
    const API_KEY =
      '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';
    SendGrid.setApiKey(API_KEY);
  }

  async send(mail: any) {
    const message = await SendGrid.send(mail);

    console.log(`Email successfully dispatched to ${mail.to}`);
    return message;
  }
}
