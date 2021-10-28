import { createContext } from 'react';
export interface MovieInfo{
	name:string;
	The_loai:string|string[],
	View:number,
	Actor:string[],
	Director:string[]|string,
	Year:string,
	Trang_Thai:string,
	Rating:string,
	id:Number;
}
export type MoviesInfo = MovieInfo[];
export const MoviesContext = createContext([] as MoviesInfo);

