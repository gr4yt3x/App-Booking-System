function NavBar() {
  return (
    <nav className="bg-gray-900 fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://www.citypng.com/public/uploads/preview/copyright-blue-logo-icon-hd-png-701751694968725lc7tgnijvl.png"
            className="h-8"
            alt="Booking System Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Ticket Booking System
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
	  <button className="btn bg-[#FF9900] text-black border-[#e17d00]">
  	Entrar
	</button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-gray-900">
            <li>
              <a
                href="/movies"
                className="block py-2 px-3 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
              >
                Filmes
              </a>
            </li>
            <li>
              <a
                href="/cinemas"
                className="block py-2 px-3 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
              >
                Cinemas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
              >
                Notícias
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
