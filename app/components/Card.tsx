import React from 'react'
import Image from 'next/image'
import Rotaract from '../pictures/rotaract.jpg'
import Dance from '../pictures/dance.jpg'
import Icms from '../pictures/icms.jpg'



const Card = () => {
  return (
    <div className='m-14'>
    <p className='text-4xl m-2 font-mono'>Personal Achievements</p>
    <br></br>
    <div className="card-container flex justify-between">
        <div className="card w-96 bg-white shadow-xl">
            <figure className="px-10 pt-10">
            <Image  src= {Rotaract} alt='Rotaract club'/>       
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">Rotaract Club</h2>
            <div>Committee Member of Publicity and Publications Division. </div>
            <div>Collborated with other committees in creation of <a className = 'text-orange-800 text-decoration-line: underline'href="https://nturac.vercel.app">Club Website</a> </div>
            </div>
        </div>

        <div className="card w-96 bg-white shadow-xl">
            <figure className="px-10 pt-10">
            <Image  src= {Icms} alt='ICMS'/>       
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">International Council of Malaysian Scholars</h2>
            <div>Associate of External Outreach and Publicity (EOP) </div>
            <div>Manages the digital branding and relationship with other student organizations </div>
            </div>
        </div>

        <div className="card w-96 bg-white shadow-xl">
            <figure className="px-10 pt-10">
            <Image  src= {Dance} alt='National Dance Competitions'/>       
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">Leader of National Dance Competition Team</h2>
            <div>Awarded Gold and Silver medals in state and national level competitions around Malaysia representing Poi Lam High School</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card