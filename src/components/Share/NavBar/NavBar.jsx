import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext/AuthContext';

const NavBar = () => {
  const { user, logout } = useAuth();
  const navLink = (
    <>
      <li>
        <Link to={'/'} className="uppercase">
          Home
        </Link>
      </li>
      <li>
        <Link to={'/dashboard'} className="uppercase">
          DashBoard
        </Link>
      </li>
      <li>
        <Link to={'/menu'} className="uppercase">
          Our Menu
        </Link>
      </li>
      <li>
        <Link to={'/shop/salad'} className="uppercase">
          Our shop
        </Link>
      </li>
      <li>
        <Link to={'contactus'} className="uppercase">
          Contact Us
        </Link>
      </li>
    </>
  );
  const handelLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log('logout error', error.message);
    }
  };
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
          <Link to="/cart">
            <div className="relative w-fit mx-3">
              <GiShoppingCart className="text-4xl" />
              <span className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-center text-[10px] text-white">
                12
              </span>
            </div>
          </Link>
          {user && <button>{user?.displayName}</button>}
          {user ? (
            <>
              <button
                onClick={handelLogOut}
                className="btn uppercase bg-transparent border-0"
              >
                Log out
              </button>
            </>
          ) : (
            <Link
              to="auth/login"
              className="btn uppercase bg-transparent border-0"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
