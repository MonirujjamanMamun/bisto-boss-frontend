// import { FaCalendar } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';

const PaymentPage = () => {
  return (
    <div className="max-w-96 sm:max-w-4xl mx-auto rounded-lg p-8">
      <form className="">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-6">
          <div className="flex items-center mt-2">
            <button
              id="dropdown-phone-button"
              data-dropdown-toggle="dropdown-phone"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              <MdOutlinePayment />
            </button>

            <div className="relative w-full">
              <input
                type="text"
                id="phone-input"
                aria-describedby="helper-text-explanation"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-e-0 border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
                required
              />
            </div>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              id="phone-input"
              aria-describedby="helper-text-explanation"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-e-0 border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Activate account
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
