import { useState } from 'react'
import './body.scss'
import './body.js'

function Body() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='container-fluid p-sm-2 p-md-4'>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 p-3 bg-primary-subtle border border-primary-subtle rounded-3">
                <p className="text-danger-emphasis">Fortune!</p>
                <h6 id="fortuneText" className="text-warning-emphasis p-3"></h6>
                <p id="fortuneType" className="text-primary-emphasis p-3"></p> 
                <button type="button" className="btn btn-outline-info btn-lb" id="FortuneButton">New Fortune!</button>
            </div>
        </div>
        <div className="container-fluid p-sm-2 p-md-4">
            <button className="btn btn-outline-danger" onClick={() => setCount((count) => count + 1)}> count is {count} </button>
        </div>
       </div>
    
    </>
  )
}

export default Body