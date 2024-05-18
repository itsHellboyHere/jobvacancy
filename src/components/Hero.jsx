import hero from '../assets/hero.svg'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='col py-20'>
      <div className=' align-element px-5 grid md:grid-cols-2 items-center gap-8'>
        <article className='align-element'>
          <h1 className='text-6xl font-bold tracking-wider'>Looking for Vacancies?</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
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
        <article className=' md:block align-element'>
          <img src={hero} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  )
}
export default Hero