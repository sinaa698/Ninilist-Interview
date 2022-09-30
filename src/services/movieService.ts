import info from "../config.json";
import { MovieType } from "../utils/types";
import http from "./httpService";

const apiEndpoint = info.apiUrl + "/movies";

export function getMoviesByQuery(query: string) {
  return http.get<Array<MovieType>>(apiEndpoint, { params: { q: query } });
}
