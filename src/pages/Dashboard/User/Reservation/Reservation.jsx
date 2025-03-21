import { FiPhoneCall } from 'react-icons/fi';
import LocationCard from '../../../../components/ContactUs/LocationCard/LocationCard';
import Title from '../../../../components/Share/Title/Title';
import { CiLocationOn } from 'react-icons/ci';
import { IoTimeOutline } from 'react-icons/io5';
import { Helmet } from 'react-helmet-async';
import { FaCalendar } from 'react-icons/fa';
import PaymentPage from '../../../../components/Dashboard/User/PaymentPage/PaymentPage';

const Reservation = () => {
  return (
    <div>
      <Helmet>
        <title>Bisto Boss | Reservation</title>
      </Helmet>
      <Title hading={'BOOK A TABLE'} subHading={'Reservation'} />
      {/* ******************* */}
      <div>
        <section className="mt-4 p-1 xs:p-8">
          <div className="max-w-96 sm:max-w-4xl mx-auto rounded-lg p-8">
            <form>
              <div className="space-y-6">
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-6">
                  {/* *******date field******* */}
                  <div className="relative h-12 pt-3 mb-4">
                    <label htmlFor="date" className="font-medium mb-1">
                      Date*
                    </label>
                    <input
                      type="date"
                      className="rounded-lg w-full pl-10 p-5"
                      name="date"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                  </div>
                  {/* *******time field******* */}
                  <div className="relative h-12 pt-3 mb-4">
                    <label htmlFor="time" className="font-medium mb-1">
                      Time*
                    </label>
                    <input
                      type="time"
                      className="rounded-lg w-full pl-10 p-5"
                      name="time"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                  </div>
                  {/* *******guest field******* */}
                  <div>
                    <label htmlFor="guest" className="font-medium mb-1">
                      Guest*
                    </label>
                    <select
                      name="type"
                      id="guest"
                      className="h-[50px] rounded-[5px] border w-full px-2"
                    >
                      <option value="person-1">Person -1</option>
                      <option value="person-1">Person -2</option>
                      <option value="person-1">Person -3</option>
                    </select>
                  </div>
                  {/* *******name field******* */}
                  <div className="mt-10">
                    <label htmlFor="name" className="font-medium mb-3">
                      Name*
                    </label>
                    <div className="max-w-xs">
                      <input
                        type="text"
                        id="name"
                        className="h-[50px] rounded-[5px] w-full px-2 pl-8 font-light"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  {/* *******phone field******* */}
                  <div className="mt-10">
                    <label htmlFor="phone" className="font-medium mb-3">
                      Phone*
                    </label>
                    <div className="max-w-xs">
                      <input
                        type="text"
                        id="phone"
                        className="h-[50px] rounded-[5px] w-full px-2 pl-8 font-light"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  {/* *******email field******* */}
                  <div className="mt-10">
                    <label htmlFor="email" className="font-medium mb-3">
                      Email*
                    </label>
                    <div className="max-w-xs">
                      <input
                        type="email"
                        id="email"
                        className="h-[50px] rounded-[5px] w-full px-2 pl-8 font-light"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-8 pt-6 flex justify-center items-center">
                <button
                  type="submit"
                  className="sm:text-base bg-linear-to-r from-[#835D23] to-[#B58130] rounded-[5px] p-[13px_25px] gap-[10px] flex items-center text-center cursor-pointer"
                >
                  Book A Table
                  <FaCalendar />
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <PaymentPage />
      {/* ************** */}
      <Title hading={'OUR LOCATION'} subHading={'Visit Us'} />
      <div className="container mx-auto my-11">
        <div className="grid md:grid-cols-3 gap-9">
          <LocationCard
            icon={FiPhoneCall}
            heading="PHONE"
            subheading="+38 (012) 34 56 789" // Custom background color
          />
          <LocationCard
            icon={CiLocationOn}
            heading="ADDRESS"
            subheading="+38 (012) 34 56 789" // Custom background color
          />
          <LocationCard
            icon={IoTimeOutline}
            heading="WORKING HOURS"
            startDay={'Mon - Fri: 08:00 - 22:00'}
            endDay={'Sat - Sun: 10:00 - 23:00'}
          />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
