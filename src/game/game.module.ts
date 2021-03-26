import { Module } from "@nestjs/common";
import {GameService} from "./game.service";
import {GameController} from "./game.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Game} from "./game.entity";
import {GameRepository} from "./game.repository";

@Module({
    imports: [TypeOrmModule.forFeature([Game, GameRepository])],
    providers: [
        GameService
    ],
    controllers: [GameController]
})
export class GameModule {}
