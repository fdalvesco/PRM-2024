import { Controller, Get, Param } from "@nestjs/common";
import { Movie } from "src/entities/movie-entity";
import { MovieSercive } from "src/services/movie-service";

@Controller('movies')
export class MovieController {
    constructor(private service: MovieSercive) {}

 @Get()
 findAll(): Promise<Movie[]> {
    return this.service.findAll();
 }

 @Get(':id')
 fundById(@Param('id') id: string): Promise<Movie> {
    return this.service.findById(id);
 }

}