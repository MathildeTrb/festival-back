import {Injectable} from "@nestjs/common";
import {Festival} from "./festival.entity";
import {FestivalDto} from "./festival.dto";
import {SpaceDto} from "../space/space.dto";
import {SpaceService} from "../space/space.service";
import {Company} from "../company/company.entity";
import {CompanyService} from "../company/company.service";
import {ExhibitorMonitoringService} from "../exhibitorMonitoring/exhibitorMonitoring.service";
import {AreaService} from "../area/area.service";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class FestivalService {
    constructor(
        private readonly spaceService: SpaceService,
        private readonly companyService: CompanyService,
        private readonly exhibitorMonitoringService: ExhibitorMonitoringService,
        private readonly areaService: AreaService,
        @InjectRepository(Festival)
        private festivalRepository: Repository<Festival>,
    ) {
    }

    async create(newFestival: FestivalDto, newSpaces: SpaceDto[]) {
        const festival: Festival = new Festival();
        festival.name = newFestival.name;
        festival.isCurrent = newFestival.isCurrent;
        festival.description = newFestival.description;
        if (festival.isCurrent) {
            await this.synchronizeFestival();
        }

        const savedFestival: Festival = await this.festivalRepository.save(festival);

        for (const space of newSpaces) {
            await this.spaceService.create(savedFestival, space);
        }

        const exhibitors: Company[] = await this.companyService.getAllAvailableExhibitor();

        exhibitors.map(async exhibitor => {
            await this.exhibitorMonitoringService.create(savedFestival, exhibitor);
        });

        return savedFestival;
    }

    async synchronizeFestival() {
        return this.festivalRepository.update(
            {isCurrent: true},
            {isCurrent: false}
        );
    }

    async getAll() {
        return this.festivalRepository.find({
            relations: [
                "spaces",
                "areas",
                "areas.gameMonitorings",
                "areas.gameMonitorings.game",
                "areas.gameMonitorings.reservation",
                "areas.gameMonitorings.reservation.exhibitorMonitoring"/*,
                "exhibitorMonitorings",
                "exhibitorMonitorings.reservation",
                "exhibitorMonitorings.reservation.gameMonitorings",
                "exhibitorMonitorings.reservation.gameMonitorings.game"*/
            ]
        });
    }

    async getCurrent() {
        return this.festivalRepository.findOne({
            where: {isCurrent: true},
            relations: ["spaces"]
        });
    }

    async getById(id: number) {
        return this.festivalRepository.findOne(id);
    }

    async getCurrentWithGames() {
        const {spaces, ...currentFestival}: Festival = await this.getCurrent();

        return {
            ...currentFestival,
            areas: await this.areaService.getAllWithGamesByIdFestival(currentFestival.id)
        }
    }

    async getGamesNotPlaced(id){
        console.log(id)
        return await this.festivalRepository.createQueryBuilder("festival")
            .innerJoinAndSelect("festival.areas", "area")
            .innerJoinAndSelect("area.gameMonitorings", "gameMonitoring")
            .innerJoinAndSelect("gameMonitoring.game", "game")
            .where("festival.id = :id", {id: id})
            .andWhere("gameMonitoring.isPlaced = :isPlaced", {isPlaced: false})
            .getMany();
    }

    async getGamesNotReceived(id){
        return await this.festivalRepository.createQueryBuilder("festival")
            .innerJoinAndSelect("festival.areas", "area")
            .innerJoinAndSelect("area.gameMonitorings", "gameMonitoring")
            .innerJoinAndSelect("gameMonitoring.status", "status")
            .innerJoinAndSelect("gameMonitoring.game", "game")
            .where("festival.id = :id", {id: id})
            .andWhere("gameMonitoring.status  != :valeur", {valeur: 3})
            .getMany();
    }

    /* async getWithGameMonitoringsById(id: number): Promise<GameMonitoring[]> {
          return this.gameMonitoringRepository.getAllByFestival(id)
          //return this.festivalRepository.findWithGameMonitoringsById(id);
      }*/
}
