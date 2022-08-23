import React from 'react'
import './Donate.css'
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";

function Donate() {
  return (
    <div className='donation'>
      <div className='h2'>
        <h2>Give a bit. Change a lot.</h2>
        <p className='para'>
          We are ready for providing better services to make
          the world happy.
        </p>
      </div>
      <div className='donate-btn'>
        <ReactBootStrap.Button
          className="btn"
          href= {"./Donationform"}
          variant="outline-success"
        >
        Donate
        </ReactBootStrap.Button>
      </div>
    </div>
  )
}

export default Donate