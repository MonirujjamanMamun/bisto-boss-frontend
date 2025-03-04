import { Helmet } from 'react-helmet-async';
import contactBanar from '../../assets/contact/banner.jpg';
import Parallax from '../../components/Share/Parallax/Parallax';
import Title from '../../components/Share/Title/Title';
import LocationCard from '../../components/ContactUs/LocationCard/LocationCard';

import { CiLocationOn } from 'react-icons/ci';
import { FiPhoneCall } from 'react-icons/fi';
import { IoTimeOutline } from 'react-icons/io5';
import ContactForm from '../../components/ContactUs/ContactForm/ContactForm';

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Bisto Boss | Contact Us</title>
      </Helmet>
      <Parallax img={contactBanar} title={'contact us'} />
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
      <div>
        <Title hading={'CONTACT FORM'} subHading={'Send Us a Message'} />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
