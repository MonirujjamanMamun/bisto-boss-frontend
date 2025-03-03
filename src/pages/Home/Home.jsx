import { Helmet } from 'react-helmet-async';
import BistoBoss from '../../components/Home/BistoBoss/BistoBoss';
import CallUs from '../../components/Home/CallUs/CallUs';
import HeroCarousel from '../../components/Home/Carousel/HeroCarousel';
import ChefRecommend from '../../components/Home/ChefRecommend/ChefRecommend';
import FromOurMenu from '../../components/Home/FromOurMenu/FromOurMenu';
import OrderOnline from '../../components/Home/OrderOnline/OrderOnline';
import OurMenu from '../../components/Home/OurMenu/OurMenu';
import Testimonials from '../../components/Home/Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bisto Boss | Home</title>
      </Helmet>
      <HeroCarousel />
      <div className="container mx-auto">
        <OrderOnline />
        <BistoBoss />
        <OurMenu />
        <CallUs />
        <ChefRecommend />
        <FromOurMenu />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
