import { useState } from 'react'
import './footer.scss'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
        <footer>
            <div className='container-fluid p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3'>
                <p>Footer</p>
            </div>
        </footer>
    </>
  )
}

export default Footer