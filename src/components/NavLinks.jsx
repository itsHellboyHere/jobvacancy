import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'jobs', text: 'job' },
  { id: 3, url: 'contact', text: 'contact' },
];

const NavLinks = () => {
  return (
    <ul className="flex space-x-5 list-none">  
      {links.map((link) => {
        const { id, url, text } = link;

        return (
          <li key={id}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'capitalize text-lg tracking-wide hover:text-emerald-600 duration-300 border-b-4 border-emerald-600'
                  : 'capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'
              }
              to={url}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
