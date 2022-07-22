import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  // OUR FUNCTION -- USESTATE IS THE EASY WAY OF DEFINING VARIABLES IN REACT
  const [show, handleShow] = useState(true);

  // FUNCTION TO MAKE TRANSITION TO NAVBAR
  const transitionNavBar = () => window.scrollY > 100 ? handleShow(true) : handleShow(false);
  
  // USEEFFECT - MAKES THE TRANSITION UPON THE OCCURENCE OF EVENT
  useEffect(() => {
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar); // CLEAN UP THE EVENT AFTER SCROLLING.
  }, []);



  return (
    <div className= {`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        {/* Background Netflix Image & alt */}
        <img className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
        alt=""
        />

        {/* Image Nav Avatar */}
        <img className="nav_avatar"
          src="https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg" 
          alt=""
        />
        
      </div>
    </div>
  )
}

export default Nav