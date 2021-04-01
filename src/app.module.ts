import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';
import { ColorModule } from './color/color.module';
import { SizeModule } from './size/size.module';

import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { HeelModule } from './heel/heel.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CategoryModule,
    ItemModule,
    ColorModule,
    SizeModule,
    HeelModule,
    // MailerModule.forRoot({
    //   transport: 'smtps://user@domain.com:pass@smtp.domain.com',
    //   defaults: {
    //     from: '"nest-modules" <modules@nestjs.com>',
    //   },
    //   template: {
    //     dir: __dirname + '/templates',
    //     adapter: new HandlebarsAdapter(),
    //     options: {
    //       strict: true,
    //     },
    //   },
    // }),
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'smtp.gmail.com',
          port: 587,
          ignoreTLS: false,
          secure: false, // upgrade later with STARTTLS
          auth: {
            user: 'web.lapista@gmail.com',
            pass: 'lapista2020',
          },
          tls: {
            rejectUnauthorized: false
          }
        },
        template: {
          dir: process.cwd() + '/templates/',
          adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        },
        options: {
          strict: false,
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
