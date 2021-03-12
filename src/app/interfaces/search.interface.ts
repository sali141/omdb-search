import { OMDBMovie } from './movie.interface';

export interface OMDBSearch {
    Response: string;
    Search: OMDBMovie[];
    totalResults: number;
    Error: string;
}
