import { API } from "../@libs/axios";
import { IMovie } from "../@libs/types";
import Header from "../components/Header";


const _ENDPOINT = '/movies';

const getMovies = async (): Promise<IMovie[]> => {
    const { data } = await API.get(_ENDPOINT)
    return data;
}

const getMoviesById = async (id: string): Promise<IMovie> => {
    const { data } = await API.get(`${_ENDPOINT}/${id}`)
    return data;
}

const getByCategoryId = async (id: number): Promise<IMovie[]> => {
    const { data } = await API.get(`${_ENDPOINT}?categoryId=${id}`)
    return data;
}

    const formData = new FormData();
    formData.append('file', file);

    return API.post(`${_ENDPOINT}/upload`, formdata,) {
        headers: {
            'Content-Type': 'multipart/from-data'
            
        }
    }
}

export const MovieService = {
    getMovies,
    getByCategoryId,
    getMoviesById
    
}