import React from 'react'

const Timeline = () => {
  return (
    <div className = 'p-5 m-14'>
    <p className='text-4xl font-mono'>Education History</p>
    <br></br> <br></br>
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-left mb-10">
      <time className="font-Georgia">May 2021 - Nov 2022</time>
      <div className="text-lg font-black">INTI International College Subang</div>
      <div>- Awarded Merit Scholarship</div>
      <div>- Chosen as Valedictorian of graduating batch 2022</div>
      <div>- A* in International A-Levels for Further Mathematics, Mathematics, Physics and Mathematics</div>
    </div>
    <hr/>
  </li>
  
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-Georgia">Aug 23 - Present</time>
      <div className="text-lg font-black">NTU</div>
      <div>- Bachelor of Computing in Computer Science</div>
      <div>- ASEAN Scholar </div>
      <div>- Current CGPA: 4.53/5.00</div>
      <div>- Relevant Modules: Data Structures and Algorithms,Introduction to Data Science and Artificial Intelligence, Computer Architecture and Organization
</div>
    </div>
    <hr />
  </li>
</ul>
</div>
  )
}

export default Timeline