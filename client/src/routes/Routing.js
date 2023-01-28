import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Add from '../pages/Add/Add'
import Course from '../pages/Course/Course'
import Home from '../pages/Home/Home'
import Teacher from '../pages/Teachrs/Teacher'

const Routing = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/course' element={<Course/>} />
          <Route path='/teach' element={<Teacher/>} />
        </Routes>
    </div>
  )
}

export default Routing
