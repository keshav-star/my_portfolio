import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Section from './components/Section';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {

  return (
    <div className=''>
      <Navbar/>
      <Section/>
      <Footer/>
    </div>
  )
}
