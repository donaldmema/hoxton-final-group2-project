import React from 'react'
import { NavLink } from 'react-router-dom'

function  JoinUs() {
  return (
    <div className='JoinUs'> 
        <h2>Join Us</h2>
        <p>Join the more than 50,000 restaurants which fill seats and manage reservations with OpenTable.</p>
        <button>
              <NavLink to="/signup">Sign up</NavLink>
            </button>
    </div>
  )
}

export default  JoinUs