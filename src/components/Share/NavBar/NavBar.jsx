const NavBar = () => {
  const navLink = (
    <>
      <li>
        <a className="uppercase">Home</a>
      </li>
      <li>
        <a className="uppercase">Contact Us</a>
      </li>
      <li>
        <a className="uppercase">DashBoard</a>
      </li>
      <li>
        <a className="uppercase">Our Menu</a>
      </li>
      <li>
        <a className="uppercase">Our shop</a>
      </li>
    </>
  );
  return (
    <>
      <div className="fixed z-30 navbar shadow-lg backdrop-blur-md py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            BISTRO BOSS <br />
            Restaurant
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn uppercase bg-transparent border-0">Sign Up</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
