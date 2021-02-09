import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async example(data) {
    await this.mailerService
      .sendMail({
        to: 'web.lapista@gmail.com', // List of receivers email address
        from: data.email, // Senders email address
        subject: data.subject, // Subject line
        text: data.message, // plaintext body
        // html: '<h1>Nova Porudzbina :</h1>' + '<br><b>' + data.name + '</b>', // HTML body content
        template: 'index',
        context: {
          // Data to be sent to template engine.
          // code: 'cf1a3f828287',
          // username: 'john doe',
          data: data,
        },
      })
      .then((success) => {
        console.log(success);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }

  async sendOrderService(data) {
    await this.mailerService
      .sendMail({
        to: ['web.lapista@gmail.com', data.email], // List of receivers email address
        from: data.email, // Senders email address
        subject: data.subject, // Subject line
        text: data.message, // plaintext body
        // html: '<h1>Nova Porudzbina :</h1>' + '<br><b>' + data.name + '</b>', // HTML body content
        template: 'index2',
        context: {
          // Data to be sent to template engine.
          // code: 'cf1a3f828287',
          // username: 'john doe',
          ite: data,
        },
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
