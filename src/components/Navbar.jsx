import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar container my-2 p-3 d-flex justify-content-between text-uppercase border-bottom border-secondary border-3 '>
      <div className='p-1 '>Keshav Sandhu</div>
      <div className='d-flex flex-row'>
        <div className='p-1'><a href="#skill">Skills</a></div>
        <div className='px-3 p-1'>Experience</div>
        <div className='p-1'><a href='#work'>My Projects</a></div>
      </div>
      <div><button className='btn btn-secondary' href="#footer">contact me</button></div>
    </div>
  )
}
