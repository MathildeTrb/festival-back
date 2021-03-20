import { Inject, Injectable } from "@nestjs/common";
import { Company } from "./company.entity";
import { CompanyRepository } from "./company.repository";
import { CompanyDto } from "./company.dto";

@Injectable()
export class CompanyService {

  @Inject("COMPANY_REPOSITORY")
  private readonly companyRepository: CompanyRepository;

  async getAllAvailable(): Promise<Company[]> {
    return this.companyRepository.findAvailable();
  }

  async getAll(): Promise<Company[]> {
    return this.companyRepository.findAll();
  }

  async create(companyDto: CompanyDto) {

    const company: Company = Company.createFromDto(companyDto);

    return this.companyRepository.save(company);
  }

  async getAllAvailableExhibitor() {
    return this.companyRepository.find({
      where: {
        isDeleted: false,
        canBeExhibitor: true
      }
    });
  }
}


