import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-1">
        <form className="md:col-span-8 p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Name *
              </label>
              <input
                className="appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="grid-first-name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Phone *
              </label>
              <input
                className="appearance-none block w-full rounded py-3 px-4 leading-tight focus:outline-none "
                id="grid-last-name"
                type="number"
                placeholder="Enter Your Phone Number"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="grid-email"
                type="email"
                placeholder="Enter Your E-mail"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Your Message
              </label>
              <textarea
                rows="10"
                className="appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center">
                <label className="block font-bold">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <span className="text-sm">I&apos;m not a robot</span>
                </label>
              </div>
            </div>
            <div className="mx-auto flex justify-center items-center bg-linear-to-r from-[#835D23] to-[#B58130] py-2 px-5 rounded-sm cursor-pointer">
              <button className="" type="submit">
                Send Message
              </button>
              <FiSend className="ms-1" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
