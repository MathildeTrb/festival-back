import {EntityRepository, Repository} from "typeorm";
import {Company} from "./company.entity";

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {

    async findAll(): Promise<Company[]> {
        return this.find({
            order: {
                name: "ASC"
            }
        })
    }

    async findAvailable(): Promise<Company[]> {
        return this.find({
            where: {
                isDeleted: false
            },
            order: {
                name: "ASC"
            },
            relations: ["contacts", "games", "games.type"]
        })
    }

    async findWithContactsById(id: number): Promise<Company> {
        return this.findOne(id, {
            where: {
                isDeleted: false
            },
            relations: ["contacts"]
        });
    }

    async findWithGamesById(id: number): Promise<Company> {
        return this.findOne(id, {
            where: {
                isDeleted: false
            },
            relations: ["games"]
        });
    }
}
