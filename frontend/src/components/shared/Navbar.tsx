import { navLinks } from "@/constants";
import { Mail, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='w-screen fixed top-0 left-0 flex justify-center items-center min-h-[7vh]'>
      <nav className='container mx-6 flex items-center justify-between px-5 2xl:px-0'>
        <Mail className='cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out size-5' />

        <ul className='flex justify-center items-center gap-8'>
          {navLinks.map(({ label, link }) => (
            <li key={label}>
              <NavLink
                to={link}
                className='hidden md:block text-white opacity-80 cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out'
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='flex justify-center items-center'>
          <button className='bg-transparent border-none outline-none cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out size-5'>
            <Search />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
