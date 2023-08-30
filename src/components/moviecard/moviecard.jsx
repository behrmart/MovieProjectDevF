import { useState, useEffect } from 'react'
import CardComponent from '../card/card.jsx';
import './moviecard.css'
//import movie1 from '../../assets/movie1.jpg'
const MovieURL = "https://api-pelis-back.onrender.com/comedia"

const MovieCard = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    if (loading) {
      fetch(MovieURL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
          setLoading(false);
        });
    }
  }, []);

  if (loading){
    return (
        <>
            <div className='p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 text-center'>
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
} else {
    return (
        <>
            <h1 className="text-center text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-3 p-2">{data.genero} Movies</h1>
            <div className="container-fluid">
              <div className="row row-cols-3">
                {data.peliculas.map((movie, index)=> {
                  return (
                    <div className="col cardHover">
                        <CardComponent key={index} titulo={movie.titulo} portada={movie.portada} sinopsis={movie.sinopsis} duracion={movie.duracion} actor1={movie.actores[0]} actor2={movie.actores[1]} actor3={movie.actores[2]}/>
                    </div>
                  )
                })}
              </div>
            </div>   
        </>
    )
  }
}

export default MovieCard