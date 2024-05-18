import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

const Navbar = () => {
    return (
        <nav className='mx-10 max-w-6xl px-6'>
            <div className="flex justify-between items-center ">
                {/* Hamburger Menu for small screens */}
                <div className="lg:hidden">
                    <div className="dropdown relative">
                        <label tabIndex={0} className='btn btn-ghost'>
                            <GiHamburgerMenu className='h-6 w-6' />
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-200 rounded-box w-52'
                        >
                            <NavLinks />
                        </ul>
                    </div>
                </div>
                {/* NavLinks for large screens */}
                <div className=" hidden lg:flex space-x-8 menu menu-horizontal">
                    <NavLinks />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
