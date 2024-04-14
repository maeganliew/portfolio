'use client'
import React from 'react'

const LinkedIn = () => {

    const ToWebsite = () => {
        window.location.href = 'https://www.linkedin.com/in/liew-jia-wei/'
    }

  return (
    <button className='btn' onClick={ToWebsite} >LinkedIn</button>
  )
}

export default LinkedIn