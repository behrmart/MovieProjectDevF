import { useState } from 'react'
import './body.scss'
import './body.js'


const Body = () => {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='container-fluid p-sm-2 p-md-4'>
        <h1>Body</h1>
        <div className="container-fluid p-sm-2 p-md-4">
            <button className="btn btn-outline-danger" onClick={() => setCount((count) => count + 1)}> count is {count} </button>
        </div>
       </div>
    
    </>
  )
}

export default Body
