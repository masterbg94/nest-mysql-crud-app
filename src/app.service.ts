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
        to: ['nmilinkovic3@gmail.com', data.email], // List of receivers email address
        from: data.email, // Senders email address
        subject: data.subject, // Subject line
        text: data.message, // plaintext body
        html: '<h1>Nova Porudzbina :</h1>' +
          '<br><b>' + data.name + '</b>', // HTML body content
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
