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
        to: data.to, // List of receivers email address
        from: data.from, // Senders email address
        subject: 'Porudzbina ✔', // Subject line
        text: data.text, // plaintext body
        html: '<h1>Nova Porudzbina :</h1>' +
          '<br><b>' + data.text + '</b>', // HTML body content
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
