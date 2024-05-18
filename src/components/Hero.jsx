import hero from '../assets/hero.svg'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    
      <div className=' col align-element w-screen py-20  px-5 grid md:grid-cols-2 items-center gap-6'>
        <article  >
          <h1 className='text-5xl font-bold tracking-wider '>Looking for Vacancies?</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wider '>
            You're at right place
          </p>
          {/* <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            
          </p> */}
          <Link to='/jobs'>
          <button className='btn bg-sky-200 mt-10 tracking-wider font-semibold'>SeeJobs</button>
          </Link>
          {/* <div className='flex gap-x-4 mt-4'>
            <a href='#'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='#'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='#'>
              <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div> */}
        </article>
        <article className=' md:block '>
          <img src={hero} className='h-80 lg:h-96' />
        </article>
      </div>
    
  )
}
export default Hero