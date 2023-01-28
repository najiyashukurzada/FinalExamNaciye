import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div>
       <nav>
            <div className='nav__left'>
                OneSchool
            </div>
            <div className='nav__middle'>
                <Link to='/' className='link'>Home</Link>
                <Link to='/add' className='link'>Add Page</Link>
                <Link to='/course' className='link'>Courses</Link>
                <Link to='/teach' className='link'>Teachers</Link>
            </div>
            <div className='nav__right'>
                <button>Contact Us</button>
            </div>
            <div className='nav__text'>
              <h1>Learn From The Expert</h1>
              <p>Learn From The ExpertLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
              <button>ADMITION NOW</button>
            </div>
            <div className='nav__form'>
              <p>Sign Up</p>
              <input type="text" placeholder='EMAIL ADDREESS' />
              <input type="text" placeholder='PASSWORD' />
              <input type="text" placeholder='RE-TYPE PASSWORD' />
              <button>SIGN UP</button>
            </div>
       </nav>
    </div>
  )
}

export default Navbar
