import { Module } from "@nestjs/common";
import { Genre } from "./genre-entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GenreService } from "./genre-service";
import { GenreController } from "./genre-controller";

@Module({
    imports: [TypeOrmModule.forFeature([Genre])],
    providers: [GenreService],
    controllers: [GenreController]
})
export class GenreModule{}