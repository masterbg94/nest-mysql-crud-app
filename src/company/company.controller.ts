import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyDto } from './companyDto';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  async showAll() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.companyService.getAllCompanies(),
    };
  }

  @Get('/:id/details')
  async showDetailed(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.companyService.getCompanyDetailed(id),
    };
  }

  @Post()
  async create(@Body() data: CompanyDto) {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Company added successfully',
      data: await this.companyService.createCompany(data),
    };
  }

  @Get('/sve')
  async dajSvega() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.companyService.testSve()
    };
  }
}
