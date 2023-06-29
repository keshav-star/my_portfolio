import React from 'react'
import Card from './Card'
import pic from '../assets/pic.avif'
import pp from '../assets/todo.jpg'
import pp2 from '../assets/chat.png'
import pp3 from '../assets/dictionary.png'
import pp4 from '../assets/pp3.png'
import Certificates from './Certificates'
import Skills from './Skills'



export default function Section() {




  return (

    <>

      {/* Intro section  */}
      <div className='container d-flex justify-content-around fs-3 align-items-center fw-semibold my-5'>
        <div className='about-me '>
          <img className='profilepic' src={pic} alt="" />
        </div>
        <div className='text-center'>
          <p className='fs-2 fw-bold'>ABOUT ME</p>
          <p>Hi, I'm keshav, <br />a passionate Full Stack Web Developer.</p>
          <p>I have a strong proficiency in building interactive and user-friendly websites.</p>
          <p>With expertise in both front-end and back-end development, I can create dynamic and robust web applications.</p>
        </div>

      </div>



      {/* projects section */}
      <div id="work" className="container ">
        <h1 className='text-center'>MY WORKS</h1>
        <div className=" d-flex justify-content-center">
          <div className="p-2 m-2"><Card imageSrc={pp} projectName={"To-do List"} urled={'https://keshav-star.github.io/todoList'} /></div>
          <div className="p-2 m-2"><Card imageSrc={pp2} projectName={"Psyc chek"} urled={'https://keshav-star.github.io/last_sem_project/'} /></div>
          <div className="p-2 m-2 smr"><Card imageSrc={pp2} projectName={"Weather App"} urled={'https://keshav-star.github.io/cloudysun'} /></div>
          {/* <div className='d-flex justify-content-center align-items-center'><div className="showmore">
            {'>'}</div>
          </div> */}

        </div>
        <div className=" d-none justify-content-center">
          <div className="p-2 m-2"><Card imageSrc={pp4} projectName={"Expense Book"} urled={'https://keshav-star.github.io/dgbook/'} /></div>
          <div className="p-2 m-2"><Card imageSrc={pp3} projectName={"Dictionary"} urled={'https://keshav-star.github.io/WordFind/'} /></div>
        </div>
      </div>

      {/* Skills section */}

      <Skills />

      {/* Training and certificates section */}

      <Certificates />
    </>
  )
}
// let typed = document.getElementsByClassName('typed');
// console.log(typed[0])