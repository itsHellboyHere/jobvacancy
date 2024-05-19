
import NavLinks from './NavLinks';
import '../assets/Hero.css'
const Nav = () => {
  return (
    <nav className='col w-screen'>
      <div className='nav-ani align-element px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold'>
        Singh <span className='text-sky-200'>& </span> <span className='text-teal-600'>Sons</span>
        </h2>
        <div className='flex gap-x-4'>
          <NavLinks/>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
