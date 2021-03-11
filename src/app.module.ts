import { Module } from '@nestjs/common';
import { FestivalModule } from "./festival/festival.module";

@Module({
  imports: [FestivalModule]
})
export class AppModule {}
