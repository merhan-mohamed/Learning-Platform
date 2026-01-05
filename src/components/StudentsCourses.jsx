import React from 'react';
import ReactPlayer from "react-player"
import { Link, useParams } from 'react-router-dom';
import { CoursesItems } from '../lib/Dummydata.js/Courses';
import { FaLinkedin } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";


const Courses = () => {
  
  const {id} = useParams()
  const CourseDetails = CoursesItems.find((x) => x.id == id)
  return (
    <div className='container'>
    <div className='mt-8'>
    <h1 className='text-lg mb-3'>{CourseDetails.name}</h1>
    <div className='flex sm:flex-row flex-col gap-20'>
    <div className='sm:w-7xl w-[15rem]'>
     <ReactPlayer
        src={CourseDetails.url}
        controls={true}
        playing={true} 
        muted={true}
        width="100%" 
        height="100%"
        className='text-center mx-auto h-7 w-xl'
      />
    </div>

    <div className='flex flex-col'>
    <div className='flex flex-row gap-2 p-5 shadow-sm rounded-xl border-2'>
    <div>
      <img src={CourseDetails.InstructorImage} alt="Instructor Photo"  className=''/>
    </div>
    <div className='flex flex-col w-96'>
      <div>
      <h3 className='font-bold text-lg'>{CourseDetails.Instructor}</h3>
      <p>Instructor</p>
      <p className='mt-2 text-sm text-gray-500'>Traversy Media features the best online web development and programming tutorials for all of the latest web technologies from the building blocks of HTML, CSS & JavaScript to frontend frameworks like React and Vue to backend technologies like Node.js, Python and PHP.</p>
      <div className='flex flex-row mt-5 gap-2'>
        <p className='w-7 h-7 bg-gray-300 text-xl pt-1 text-center cursor-pointer'>
          <Link to="https://www.linkedin.com/in/bradtraversy/">
          <FaLinkedin  className='mx-auto text-center'/>
          </Link>
        </p>
        <p className='w-7 h-7 bg-gray-300 text-xl pt-1 text-center cursor-pointer'>
          <Link to="https://x.com/traversymedia">
          <GrTwitter className='mx-auto text-center'/>
          </Link>
        </p>
        <p className='w-7 h-7 bg-gray-300 text-xl pt-1 text-center cursor-pointer'>
          <Link to="https://github.com/bradtraversy/">
          <FaGithub className='mx-auto text-center'/>
          </Link>
          </p>
      </div>
      </div>
    </div>
    </div>

    <div className='shadow-sm rounded-xl border-2 mt-5 p-5'>
     
      <ol className='list-decimal list-inside'>
    {(CourseDetails.section).map((item) => (
        <li className='text-blue-500'>
          {item}
        </li>
          ))}
      </ol>
      <div className='mx-auto px-5 mt-2 text-center'>
      <Link to={CourseDetails.url}>
      <button className='bg-primary text-white text-center w-40 rounded-sm py-1 cursor-pointer'>Show more</button>
      </Link>
      </div>
    
     
    </div>
    </div>
    
    </div> 
    </div>
    </div>
  )
}

export default Courses
