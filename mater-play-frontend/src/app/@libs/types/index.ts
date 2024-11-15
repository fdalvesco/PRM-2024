export interface ICategory {
    id?: number;
    name: string;
    active: boolean;
}

export interface IGenre {
    id?: string;
    description: string;
}

export interface IMovie {
    id?: string;
    title: string;
    description: string;
    poster: string;
    ageRating: string;
    categorys: ICategory[];
    genres: IGenre[];
}