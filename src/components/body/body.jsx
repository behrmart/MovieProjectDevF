import { useState } from 'react'
//import './body.scss'
//import './body.js'
import MovieCard from '../moviecard/moviecard.jsx'



const Body = () => {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='container-fluid p-sm-2 p-md-4'>
        <h3>Movies Container</h3>
        <div className="row">
          <div className="col-4"><MovieCard /></div>
          <div className="col-4"><MovieCard /></div>
          <div className="col-4"><MovieCard /></div>  
        </div>
        <div className="container-fluid p-sm-2 p-md-4">
            <button className="btn btn-outline-danger" onClick={() => setCount((count) => count + 1)}> count is {count} </button>
        </div>
       </div>
    
    </>
  )
}

export default Body
