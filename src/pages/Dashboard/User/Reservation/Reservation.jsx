import { FiPhoneCall } from 'react-icons/fi';
import LocationCard from '../../../../components/ContactUs/LocationCard/LocationCard';
import Title from '../../../../components/Share/Title/Title';
import { CiLocationOn } from 'react-icons/ci';
import { IoTimeOutline } from 'react-icons/io5';
import { Helmet } from 'react-helmet-async';

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
          <div className=" max-w-96 sm:max-w-4xl mx-auto rounded-lg p-8">
            <form>
              <div className="space-y-6">
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-6">
                  <div>
                    <label
                      htmlFor="category"
                      className="text-xs xs:text-sm font-medium mb-1"
                    >
                      Jop Type
                    </label>
                    <select
                      name="type"
                      id="type"
                      className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2"
                    >
                      <option value="Hourly" selected="">
                        Hourly
                      </option>
                      <option value="FixedRate">Fixed rate</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="from"
                      className="text-xs xs:text-sm font-medium mb-1"
                    >
                      From <span className="font-light">(Optional)</span>
                    </label>
                    <div className="relative max-w-xs">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-lg font-medium">
                        $
                      </span>
                      <input
                        type="text"
                        className="h-[50px] rounded-[5px] text-xs xs:text-sm w-full px-2 pl-8 font-light"
                        placeholder="0.00"
                        value=""
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="to"
                      className="text-xs xs:text-sm font-medium mb-1"
                    >
                      To <span className="font-light">(Optional)</span>
                    </label>
                    <div className="relative max-w-xs">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-lg font-medium">
                        $
                      </span>
                      <input
                        type="text"
                        className="h-[50px] rounded-[5px] text-xs xs:text-sm w-full px-2 pl-8 font-light"
                        placeholder="0.00"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="relative h-12 pt-3 mb-4">
                  <input
                    type="date"
                    className="text-sm rounded-lg w-full pl-10 p-5"
                    name="date"
                    value=""
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t flex justify-between">
                <button className="hidden sm:block underline-offset-8">
                  back
                </button>
                <button
                  type="submit"
                  className=" sm:w-[86px] w-full h-[50px] text-xs sm:text-base bg-[#4D7C0F] rounded-[5px] p-[13px_25px] gap-[10px] text-white"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
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
