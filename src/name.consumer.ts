import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('name')
export class NameConsumer {
  @Process()
  nameJob(job: Job<unknown>) {
    console.log(job.data);
  }
}
