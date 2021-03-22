import {Inject, Injectable} from "@nestjs/common";
import {Company} from "./company.entity";
import {CompanyRepository} from "./company.repository";
import {CompanyDto} from "./company.dto";

@Injectable()
export class CompanyService {

    @Inject("COMPANY_REPOSITORY")
    private readonly companyRepository: CompanyRepository;

    async getAllAvailable(): Promise<Company[]> {
        const companies = await this.companyRepository.findAvailable();

        companies.forEach(company => {
            company.games = company.games.filter(game => !game.isDeleted)
        })

        return companies;
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


