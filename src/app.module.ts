import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NameConsumer } from './name.consumer';
import { NameProducerService } from './name.producer.service';
import { MailController } from './mail.controller';
import { SendgridService } from './sendgrid.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'name',
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, MailController],
  providers: [AppService, NameProducerService, NameConsumer, SendgridService],
})
export class AppModule {}
