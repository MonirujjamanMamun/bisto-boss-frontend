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
  const adminNavLink = (
    <>
      <li className="flex items-center my-6">
        <IoMdHome className="w-6 h-6" />
        <NavLink
          to={'/dashboard/adminhome'}
          className="text-[16px] ps-3 font-bold uppercase"
        >
          Admin Home
        </NavLink>
      </li>
      <li className="flex items-center my-6">
        <ImSpoonKnife className="w-6 h-6" />
        <NavLink
          to={'/dashboard/additem'}
          className="text-[16px] ps-3 font-bold uppercase"
        >
          add items
        </NavLink>
      </li>
      <li className="flex items-center my-6">
        <FaList className="w-6 h-6" />
        <NavLink
          to={'/dashboard/manageitem'}
          className="text-[16px] ps-3 font-bold uppercase"
        >
          manage items
        </NavLink>
      </li>
      <li className="flex items-center my-6">
        <FaBook className="w-6 h-6" />
        <NavLink
          to={'/dashboard/managebooking'}
          className="text-[16px] ps-3 font-bold uppercase"
        >
          Manage bookings
        </NavLink>
      </li>
      <li className="flex items-center my-6">
        <FaUsers className="w-6 h-6" />
        <NavLink
          to={'/dashboard/alluser'}
          className="text-[16px] ps-3 font-bold uppercase"
        >
          all users
        </NavLink>
      </li>
    </>
  );
  const userNavLink = (
    <>
      <li className="flex items-center my-6">
        <IoMdHome className="w-6 h-6" />
        <NavLink
          to={'/dashboard/userhome'}
          className="text-[16px] ps-3 font-bold uppercase"
        >
          User Home
        </NavLink>
      </li>
      <li className="flex items-center my-6">
        <SlCalender className="w-6 h-6" />
        <NavLink
          to={'/dashboard/reservation'}
          className="text-[16px] ps-3 font-bold uppercase"
        >
          reservation
        </NavLink>
      </li>
      <li className="flex items-center my-6">
        <FaWallet className="w-6 h-6" />
        <NavLink
          to={'/dashboard/paymenthistory'}
          className="text-[16px] ps-3 font-bold uppercase"
        >
          payment history
        </NavLink>
      </li>
      <li className="flex items-center my-6">
        <FaCartShopping className="w-6 h-6" />
        <NavLink
          to={'/dashboard/mycart'}
          className="text-[16px] ps-3 font-bold uppercase"
        >
          my cart
        </NavLink>
      </li>
      <li className="flex items-center my-6">
        <MdReviews className="w-6 h-6" />
        <NavLink
          to={'/dashboard/addreview'}
          className="text-[16px] ps-3 font-bold uppercase"
        >
          add review
        </NavLink>
      </li>
      <li className="flex items-center my-6">
        <TbCalendarShare className="w-6 h-6" />
        <NavLink
          to={'/dashboard/mybooking'}
          className="text-[16px] ps-3 font-bold uppercase"
        >
          my booking
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054] ps-9 pt-9">
        <ul>
          {adminNavLink}
          {userNavLink}
          <div className="divider"></div>
          <li className="flex items-center my-6">
            <IoMdHome className="w-6 h-6" />
            <NavLink to={'/'} className="text-[16px] ps-3 font-bold uppercase">
              Home
            </NavLink>
          </li>
          <li className="flex items-center my-6">
            <IoMenu className="w-6 h-6" />
            <NavLink
              to={'/menu'}
              className="text-[16px] ps-3 font-bold uppercase"
            >
              Menu
            </NavLink>
          </li>
          <li className="flex items-center my-6">
            <FaShoppingBag className="w-6 h-6" />
            <NavLink
              to={'/shop/salad'}
              className="text-[16px] ps-3 font-bold uppercase"
            >
              Shop
            </NavLink>
          </li>
          <li className="flex items-center my-6">
            <MdEmail className="w-6 h-6" />
            <NavLink
              to={'/contactus'}
              className="text-[16px] ps-3 font-bold uppercase"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="ps-11">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
