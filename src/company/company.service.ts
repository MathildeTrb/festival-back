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

    async update(company: CompanyDto) {
        return this.companyRepository.update(company.id, {
            name: company.name,
            mail: company.mail,
            address: company.address,
            canBeExhibitor: company.canBeExhibitor
        });
    }

    async delete(id: number) {
        return this.companyRepository.update(id, { isDeleted: true });
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


