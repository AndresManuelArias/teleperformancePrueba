import {Request,Response} from 'express'
import {IMovies,Movies}  from '../models/Movies.model';


// Make a request for a user with a given ID

export const searchMovie = async (req:Request,res:Response)=>{
    try {
        let movies = new  Movies();
        let imovies:IMovies[]= await movies.search(req.params.titulo);
       if(imovies) return res.status(200).json(imovies)
       res.status(404).json(
        {
            "Response": "False",
            "Error": "Too many results."
        }
    )
    } catch (error) {
        res.status(404).json(
            {
                "Response": "False",
                "Error": "Too many results."
            }
        )
    }

 
}
