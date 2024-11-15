import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieService } from "../../services/movies-service";
import { IMovie } from "../../@libs/types";

function HighLightSection() {

    const params = useParams();

    const [movie, setMovie] = useState<IMovie>({} as IMovie);

    useEffect(() => {

        const movieId = (params.id) ? (params.id) : 'b85f205a-926b-463a-9719-10af6c9b38ea'


        MovieService.getMoviesById(movieId)
        .then(result => {
        if(result) setMovie(result)
        })
        .catch(error => {
        console.log("PAU: ", error)
        })  
        
    }, [params]);

    return (
        <Box>
            <Container>
                <Stack
                    direction="row"
                >
                    <img src={`assets/${movie.poster}`}/>
                    <Stack
                        sx={{
                            display: 'flex',
                            direction: 'column',
                            justifyContent: 'center',
                            paddingLeft: '3rem'
                        }}
                    >
                        <Typography
                            variant="h4"
                        >
                            {movie.title}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                        >
                            <span
                                style={{
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    padding: '0.2rem',
                                    marginRight: '0.3rem'
                                }}
                            >
                                {movie.ageRating}
                            </span>    
                           {movie.genres && movie.genres.map(genre => (genre.description)).join(', ')}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                paddingTop: '2rem',
                                marginBottom: '0.5rem'
                            }}
                        >
                            {movie.description}
                        </Typography>
                        <Stack
                            gap={1}
                            direction="row"
                            sx={{
                                paddingY: '1rem'
                            }}
                        >
                            <Button
                                variant="outlined"
                            >Assistir</Button>
                            <Button
                                 variant="outlined"
                            >
                                Detalhes
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default HighLightSection;