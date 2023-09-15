import { useState, useEffect } from 'react'
import CardComponent from '../card/card.jsx';
import './moviecard.css'

const MovieURL = "https://api-pelis-back.onrender.com/"

const MovieCard = (props) => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [pelisFilter, setPelisFilter] = useState([]);
  const [searchState, setSearch] = useState("");

  let endpointURL = MovieURL + props.genero;

  useEffect(() => {
    if (loading) {
      fetch(endpointURL)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          setData(data);
          setPelisFilter(data.peliculas); /* Debo inicializar el estado de peliculas filtradas en un inicio */
          setLoading(false);
        });
    }
  }, []);

  const handlerSearch = (e) => {
    let value = e.target.value;
    setSearch(value);

    if (!value) {
      setPelisFilter(data.peliculas);
    } else {
      const filterMovies = data.peliculas.filter((movie) => movie.titulo.toLowerCase().includes(searchState.toLowerCase()));
      setPelisFilter(filterMovies);
      //console.log(pelisFilter);
    }
  }

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
              <div className="row mb-5 text-center">
                <div className="col-md-4"></div>
                <div className="col-md-4"><input className="form-control form-control-lg search" type="text" placeholder="Buscar Película" aria-label="form control" onChange={handlerSearch} /></div>
              </div>
              <div className="row row-cols-3">
                {pelisFilter.map((movie)=> {
                  const uniqueKey = `${movie.genero}_${movie.titulo}`; // Generate unique key for each card.
                  return (
                    <div className="col cardHover py-2" key={uniqueKey}>
                        <CardComponent 
                          genero={movie.genero} 
                          titulo={movie.titulo} 
                          portada={movie.portada} 
                          sinopsis={movie.sinopsis} 
                          duracion={movie.duracion} 
                          actor1={movie.actores[0]} 
                          actor2={movie.actores[1]} 
                          actor3={movie.actores[2]}/>
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