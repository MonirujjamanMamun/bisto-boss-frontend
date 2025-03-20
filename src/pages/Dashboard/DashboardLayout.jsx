import { NavLink, Outlet } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { ImSpoonKnife } from 'react-icons/im';
import {
  FaUsers,
  FaBook,
  FaList,
  FaWallet,
  FaShoppingBag,
} from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { FaCartShopping } from 'react-icons/fa6';
import { TbCalendarShare } from 'react-icons/tb';
import { MdEmail, MdReviews } from 'react-icons/md';
import { IoMenu } from 'react-icons/io5';
import useAuth from '../../hooks/useAuth';

const DashboardLayout = () => {
  const { user } = useAuth();
  console.log('dashboard', user);
  const activeLink = ({
    isActive,
  }) => `flex items-center text-[16px] font-bold uppercase
  ${isActive ? 'text-black' : 'text-white'}`;
  const adminNavLink = (
    <>
      <li className=" m-1">
        <NavLink to={'/dashboard/adminhome'} className={activeLink}>
          <IoMdHome className="w-6 h-6 mr-1" />
          Admin Home
        </NavLink>
      </li>
      <li className="my-6">
        <NavLink to={'/dashboard/additem'} className={activeLink}>
          <ImSpoonKnife className="w-6 h-6 mr-1" />
          add items
        </NavLink>
      </li>
      <li className="my-6">
        <NavLink to={'/dashboard/manageitem'} className={activeLink}>
          <FaList className="w-6 h-6 mr-1" />
          manage items
        </NavLink>
      </li>
      <li className="my-6">
        <NavLink to={'/dashboard/managebooking'} className={activeLink}>
          <FaBook className="w-6 h-6 mr-1" />
          Manage bookings
        </NavLink>
      </li>
      <li className="my-6">
        <NavLink to={'/dashboard/alluser'} className={activeLink}>
          <FaUsers className="w-6 h-6 mr-1" />
          all users
        </NavLink>
      </li>
    </>
  );
  const userNavLink = (
    <>
      <li className="my-6">
        <NavLink to={'/dashboard/userhome'} className={activeLink}>
          <IoMdHome className="w-6 h-6 mr-1" />
          User Home
        </NavLink>
      </li>
      <li className="my-6">
        <NavLink to={'/dashboard/reservation'} className={activeLink}>
          <SlCalender className="w-6 h-6 mr-1" />
          reservation
        </NavLink>
      </li>
      <li className="my-6">
        <NavLink to={'/dashboard/paymenthistory'} className={activeLink}>
          <FaWallet className="w-6 h-6 mr-1" />
          payment history
        </NavLink>
      </li>
      <li className="my-6">
        <NavLink to={'/dashboard/mycart'} className={activeLink}>
          <FaCartShopping className="w-6 h-6 mr-1" />
          my cart
        </NavLink>
      </li>
      <li className="my-6">
        <NavLink to={'/dashboard/addreview'} className={activeLink}>
          <MdReviews className="w-6 h-6 mr-1" />
          add review
        </NavLink>
      </li>
      <li className="my-6">
        <NavLink to={'/dashboard/mybooking'} className={activeLink}>
          <TbCalendarShare className="w-6 h-6 mr-1" />
          my booking
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex">
      <div className="w-72 min-h-screen bg-[#D1A054] ps-9 pt-9">
        <ul className="px-5">
          {adminNavLink}
          {userNavLink}
          <div className="divider"></div>
          <li className=" my-6">
            <NavLink
              to={'/'}
              className="text-[16px] ps-3 font-bold uppercase flex items-center"
            >
              <IoMdHome className="w-6 h-6 mr-1" />
              Home
            </NavLink>
          </li>
          <li className="my-6">
            <NavLink
              to={'/menu'}
              className="flex items-center text-[16px] ps-3 font-bold uppercase"
            >
              <IoMenu className="w-6 h-6 mr-1" />
              Menu
            </NavLink>
          </li>
          <li className="my-6">
            <NavLink
              to={'/shop/salad'}
              className="flex items-center text-[16px] ps-3 font-bold uppercase"
            >
              <FaShoppingBag className="w-6 h-6 mr-1" />
              Shop
            </NavLink>
          </li>
          <li className="my-6">
            <NavLink
              to={'/contactus'}
              className="flex items-center text-[16px] ps-3 font-bold uppercase"
            >
              <MdEmail className="w-6 h-6 mr-1" />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="ps-11 w-full pt-3 pr-3">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
