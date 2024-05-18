
import NavLinks from './NavLinks';

const Nav = () => {
  return (
    <nav className='col'>
      <div className='mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold'>
        Job<span className='text-teal-600'>Vacancy</span>
        </h2>
        <div className='flex gap-x-4'>
          <NavLinks/>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
