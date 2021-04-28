import axios from 'axios';

export interface IMovies {
    Title:string
    Year:string
    imdbID:string
    Type:string
    Poster:string
}
export class Movies  {
    async search(title:string):Promise<IMovies[]>{
        return new Promise((res,c)=>{
            axios.get(`http://www.omdbapi.com/?apikey=${process.env.apikey||''}&S=${title}`)
            .then( (response:any)=> {
              // handle success
              console.log(response);
              let r = response.data.Search as IMovies[]
              res(r)
            })
            .catch(function (error) {
              // handle error
              console.log(error);
              c(error)
            })
            .then(function () {
              // always executed
            });
        })

    }
}