import React from 'react'
import Image from 'next/image'
import c_image from '../pictures/c.png'
import python_image from '../pictures/python.png'
import html_image from '../pictures/html.webp'
import next from '../pictures/next.png'
import ts from '../pictures/typescript.png'
import react from '../pictures/react.png'





const Avatar = () => {
  return (

    <div className='m-14'>
    <br></br>
    <p className='text-4xl py-5 font-mono'>Technical Skills</p>
    <div className="card-container flex justify-evenly p-5">

         <div className="avatar">
         <div className="w-24 rounded-full">
            <Image  src= {c_image} alt='C Language'/>       
             </div>
             </div>

        <div className="avatar">
        <div className="w-24 rounded-full">
        <Image  src= {python_image} alt='Python'/>       
        </div>
        </div>

        <div className="avatar">
        <div className="w-24 rounded-full">
        <Image  src= {html_image} alt='HTML'/>       
        </div>
        </div>

        <div className="avatar">
        <div className="w-24 rounded-full">
        <Image  src= {react} alt='React'/>       
        </div>
        </div>

        <div className="avatar">
        <div className="w-24 rounded-full">
        <Image  src= {ts} alt='Typescript'/>       
        </div>
        </div>

        <div className="avatar">
        <div className="w-24 rounded-full">
        <Image  src= {next} alt='Next.js'/>       
        </div>
        </div>
    </div>
    </div>
  )
}

export default Avatar