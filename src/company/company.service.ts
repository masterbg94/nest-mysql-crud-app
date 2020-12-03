import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from './company.entity';
import { getManager, Repository } from 'typeorm';
import { CompanyDto } from './companyDto';
import any = jasmine.any;

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private companyRepository: Repository<CompanyEntity>,
  ) {}

  async getAllCompanies() {
    return await this.companyRepository.find({ relations: ['users'] });
  }

  async createCompany(data: CompanyDto) {
    const company = this.companyRepository.create(data);
    await this.companyRepository.save(data);
    return company;
  }

  async getCompanyDetailed(id: number) {
    const companyWithUsers = await this.companyRepository.findOne(id, {
      relations: ['users'],
    });
    return companyWithUsers;
  }

  async testSve () {
    let dajSve = await this.companyRepository.createQueryBuilder("company")
      .innerJoinAndSelect("company.users" , "user")
      .innerJoinAndSelect("user.photosos" , "photo").getMany();
    return dajSve;
  }

}
