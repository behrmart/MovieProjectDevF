import { useState } from 'react'
//import './body.scss'
//import './body.js'
import MovieCard from '../moviecard/moviecard.jsx'



const Body = (props) => {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='container-fluid p-sm-2 p-md-4'>
        <MovieCard genero = {props.genero} key = {props.genero} />
       </div>
    
    </>
  )
}

export default Body
