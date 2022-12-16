import { Link, useNavigate } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [searchInput, setSearchInput] = useState('');
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const searchChange = (e) => {
    setSearchInput(e.target.value.replace(' ', '-'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    window.scrollTo(0, 0);
    navigate(`search/${searchInput}`, { replace: true });
  };

  useEffect(() => {
    window.onscroll = function () {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
    };
  });

  const hamburgerCLick = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    // Hamburger
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-[999] ">
      <div className="container px-10 xl:px-20 py-4">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            {location === '/' ? (
              <a href="#home" className="font-libre text-white lg:text-3xl md:text-3xl sm:text-xl">
                Hacktiv8 Cinema
              </a>
            ) : (
              <Link to="/" className="font-libre text-white lg:text-3xl md:text-3xl sm:text-xl">
                 Hacktiv8 Cinema
              </Link>
            )}
          </div>

          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" onClick={hamburgerCLick} className="block absolute right-4 lg:hidden">
              <span className="hamburger-line origin-top-left transition duration-300"></span>
              <span className="hamburger-line transition duration-300"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300"></span>
            </button>

            <nav
              id="nav-menu"
              className="hidden absolute py-6 lg:py-0 bg-black/40 shadow-lg text-white rounded-lg min-h-[5rem] lg:min-h-0 max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <div className="block lg:flex lg:justify-center lg:items-center">
                <ul className="block lg:flex lg:justify-center lg:items-center space-y-3 lg:space-y-0">
                  <li className="group lg:flex">
                    {location === '/' ? (
                      <a href="#home" className="text-base py-2 mx-6 font-quicksand font-base group-hover:text-primary">
                        Home
                      </a>
                    ) : (
                      <NavLink to="/" onClick={() => window.scrollTo(0, 0)} className="text-base py-2 mx-6 font-quicksand font-base group-hover:text-primary">
                        Home
                      </NavLink>
                    )}
                  </li>
                  <li className="group lg:flex">
                    {location === '/' ? (
                      <a href="#movies" className="text-base py-2 mx-6 font-quicksand font-base group-hover:text-primary">
                        Movies
                      </a>
                    ) : (
                      <NavLink to="/#movies" onClick={() => window.scrollTo(0, 792)} className="text-base py-2 mx-6 font-quicksand font-base group-hover:text-primary">
                        Movies
                      </NavLink>
                    )}
                  </li>
                  <li className="group lg:flex">
                    <NavLink to="/bookmark" onClick={() => window.scrollTo(0, 0)} className="text-base py-2 mx-6 font-quicksand font-base group-hover:text-primary">
                      My List
                    </NavLink>
                  </li>
                </ul>

                <form onSubmit={handleSubmit} className="pt-6 px-6 lg:pt-0 lg:px-0 flex" id="form-search">
                  <input type="text" onChange={searchChange} className="w-full text-base border border-primary border-opacity-50 bg-secblack/20 rounded-lg text-white py-1 px-2 focus:outline-none focus:ring-0" placeholder="Search Movie" />
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
