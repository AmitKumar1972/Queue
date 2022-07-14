import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class NameProducerService {
  constructor(@InjectQueue('name') private queue: Queue) {}

  async sendName(name: any) {
    await this.queue.add(
      {
        name,
      },
      { delay: 3000 },
    );

    await this.queue.add(
      {
        name,
      },
      { delay: 3000 },
    );
  }
}
