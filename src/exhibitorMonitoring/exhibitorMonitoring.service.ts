import {Inject, Injectable} from "@nestjs/common";
import {ExhibitorMonitoringDto} from "./exhibitorMonitoring.dto";
import {ExhibitorMonitoring} from "./exhibitorMonitoring.entity";
import {Festival} from "../festival/festival.entity";
import {Company} from "../company/company.entity";
import {Equal, IsNull, MoreThan, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {CompanyService} from "../company/company.service";
import {CompanyDto} from "../company/company.dto";
import {FestivalDto} from "../festival/festival.dto";


@Injectable()
export class ExhibitorMonitoringService {

    constructor(
        private readonly companyService: CompanyService,
        @InjectRepository(ExhibitorMonitoring)
        private readonly exhibitorMonitoringRepository: Repository<ExhibitorMonitoring>

    ) {}



    async create(festival: Festival, exhibitor: Company, comment?: string) {
        const exhibitorMonitoring: ExhibitorMonitoring = new ExhibitorMonitoring();

        exhibitorMonitoring.exhibitor = exhibitor;
        exhibitorMonitoring.festival = festival;
        exhibitorMonitoring.comment = comment ? comment : null;

        return this.exhibitorMonitoringRepository.save(exhibitorMonitoring)
    }

    async getAll(): Promise<ExhibitorMonitoring[]> {
        return this.exhibitorMonitoringRepository.find({
            order: {
                exhibitor: "ASC"
            }
        });
    }

    async getByFestival(id: number): Promise<ExhibitorMonitoring[]> {
        return this.exhibitorMonitoringRepository.find({
            where: {
                festival: id
            },
            relations: [
                "festival",
                "status",
                "exhibitor",
                "reservation",
                "reservation.reservationDetails",
                "reservation.reservationDetails.space",
                "reservation.gameMonitorings"
            ]
        });
    }

    async updateDate(exhibitorMonitoringDto: ExhibitorMonitoringDto) {
        await this.exhibitorMonitoringRepository.update(
            {
                exhibitor: exhibitorMonitoringDto.exhibitor,
                festival: exhibitorMonitoringDto.festival
            }, {
                dateContact1: exhibitorMonitoringDto.dateContact1,
                dateContact2: exhibitorMonitoringDto.dateContact2,
                dateContact3: exhibitorMonitoringDto.dateContact3
            })
        return this.updateStatus(exhibitorMonitoringDto)
    }

    async updateComment(exhibitorMonitoring: ExhibitorMonitoringDto) {
        return this.exhibitorMonitoringRepository.update({
            exhibitor: exhibitorMonitoring.exhibitor,
            festival: exhibitorMonitoring.festival
        }, {
            comment: exhibitorMonitoring.comment
        })
    }

    async getByFestivalAndExhibitor(idFestival: number, idExhibitor: number) {
        return this.exhibitorMonitoringRepository.find(
            {
                where: {festival: idFestival, exhibitor: idExhibitor},
                relations: ["festival", "status", "exhibitor", "reservation"]
            }
        )
    }

    async updateStatus(exhibitorMonitoringDto: ExhibitorMonitoringDto) {
        return this.exhibitorMonitoringRepository.update({
            exhibitor: exhibitorMonitoringDto.exhibitor,
            festival: exhibitorMonitoringDto.festival
        }, {
            status: exhibitorMonitoringDto.status
        })
    }

    async getDashboard(idExhibitor: number, idFestival: number): Promise<ExhibitorMonitoring> {
        return this.exhibitorMonitoringRepository.findOne({
            where: {
                exhibitor: idExhibitor,
                festival: idFestival
            },
            relations: [
                "status",
                "exhibitor",
                "festival",
                "exhibitor.games",
                "exhibitor.contacts",
                "reservation",
                "reservation.reservationDetails",
                "reservation.reservationDetails.space",
                "reservation.gameMonitorings",
                "reservation.gameMonitorings.game",
                "reservation.gameMonitorings.area",
                "reservation.gameMonitorings.status"
            ]
        });
    }

    async getReservationsConfirmed(idFestival: number) : Promise<ExhibitorMonitoring[]> {
        return this.exhibitorMonitoringRepository.find({
            where: {
                festival: idFestival,
                status: 6

            },
                relations:[]
        })
    }


    async getReservationsByIdFestival(id: number) {
        return this.exhibitorMonitoringRepository.find({
            where: {
                festival: id
            },
            relations: []
        })
    }

    async getPeopleNotContactedByFestival(id: number) : Promise<ExhibitorMonitoring[]>{
        return this.exhibitorMonitoringRepository.find(
            {
                where: {
                    festival: id,
                    status: 1
                },
                relations:[]
            }
        )
    }

    async getPeopleContactedNoAnswer(id:number){
        return await this.exhibitorMonitoringRepository.find({
            where:{
                festival: id,
                status:2
            },
            relations:["exhibitor"]
        })
    }

    async getPeopleContacted(id:number){
        return await this.exhibitorMonitoringRepository.find({
            where:{
                festival: id,
                status: MoreThan(1)
            },
            relations:["exhibitor"]
        })
    }

    async getExhibitorsNotInFestival(id: number): Promise<Company[]>{
        const allCompanies = await this.companyService.getAllAvailableExhibitor()
        const allExhitbitors = await this.getByFestival(id)

        const res: Company[] = []
        let check = false
        allCompanies.map((company) =>{
            allExhitbitors.map((exhibitor) => {
                if(exhibitor.exhibitor.id == company.id){
                    check=true
                }
            })
            if(check==false){
                res.push(company)
            }
            check=false
        })
        return res



    }
}
