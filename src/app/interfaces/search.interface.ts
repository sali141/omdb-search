import { Movie } from "./movie.interface";

export interface Search {
    Response : string;
    Search : Movie[];
    totalResults : string;
    Error : string;
}