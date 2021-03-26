import {Inject, Injectable} from "@nestjs/common";
import {Company} from "./company.entity";
import {CompanyRepository} from "./company.repository";
import {CompanyDto} from "./company.dto";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class CompanyService {

    constructor(
        @InjectRepository(CompanyRepository)
        private readonly companyRepository: CompanyRepository
    ) {}

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

    async getById(id: number) {
        return this.companyRepository.findOne(id, {
            relations: [
                "games",
                "contacts"
            ]
        });
    }
}


