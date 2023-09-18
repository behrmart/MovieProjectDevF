import React from 'react'
import { useLocation } from 'react-router-dom'

function MovieDetail(props) {
    const location = useLocation();
    const movie = location.state;
    //console.log(movie)

    return (
      <>
        <div className="container p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
            <div className="row">
                <div className="col">
                    <h1 className='text-center text-info-emphasis'>{movie.titulo}</h1>
                </div>
            </div>

            <div className="row p-2">
                <div className="col">
                    <img className="img-fluid rounded" src={movie.portada} alt="" />
                </div>
                <div className="col">
                    <p className='text-light-emphasis'>{movie.sinopsis}</p>
                    <ul>
                        <li>Director: <span className='text-warning-emphasis'>{movie.director}</span></li>
                        <li>Genero: <span className='text-warning-emphasis'>{movie.genero}</span></li>
                        <li>Fecha de estreno: <span className='text-warning-emphasis'>{movie.anio}</span></li>
                        <li>Actor 1: <span className='text-warning-emphasis'>{movie.actor1}</span></li>
                        <li>Actor 2: <span className='text-warning-emphasis'>{movie.actor2}</span></li>
                        <li>Actor 3: <span className='text-warning-emphasis'>{movie.actor3}</span></li>
                    </ul>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default MovieDetail

