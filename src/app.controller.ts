import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/sendmail')
  sendMail(@Body() data: any): any {
    return this.appService.example(data);
    // radi ovakav response
    // return {
    //   statusCode: HttpStatus.CREATED,
    //   message: 'Mail send',
    //   data: this.appService.example(data),
    // };
  }

  @Post('/sendorder')
  sendOrder(@Body() data: any): any {
    return this.appService.sendOrderService(data);
    // radi ovakav response
    // return {
    //   statusCode: HttpStatus.CREATED,
    //   message: 'Mail send',
    //   data: this.appService.example(data),
    // };
  }
}
