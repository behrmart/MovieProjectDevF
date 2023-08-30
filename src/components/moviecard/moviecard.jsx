import { useState } from 'react'
import movie1 from '../../assets/movie1.jpg'


const MovieCard = () => {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="card">
                <img src={movie1} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <p>Link1</p>
                    <p>Link2</p>
                </div>
        </div>
    
    </>
  )
}

export default MovieCard