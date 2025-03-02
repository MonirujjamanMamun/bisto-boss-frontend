import Title from '../../Share/Title/Title';
import onlineProductImg1 from '../../../assets/home/slide1.jpg';
import onlineProductImg2 from '../../../assets/home/slide2.jpg';
import onlineProductImg3 from '../../../assets/home/slide3.jpg';
import onlineProductImg4 from '../../../assets/home/slide4.jpg';
import onlineProductImg5 from '../../../assets/home/slide5.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const OrderOnline = () => {
  return (
    <section className="my-11">
      <div>
        <Title subHading="From 11:00am to 10:00pm" hading="ORDER ONLINE" />
      </div>
      <div className="my-5">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <img src={onlineProductImg1} alt="" />
              <p className="absolute bottom-10 left-1/3 text-2xl">Salads</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={onlineProductImg2} alt="" />
              <p className="absolute bottom-10 left-1/3 text-2xl">pizzas</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={onlineProductImg3} alt="" />
              <p className="absolute bottom-10 left-1/3 text-2xl">Soups</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={onlineProductImg4} alt="" />
              <p className="absolute bottom-10 left-1/3 text-2xl">desserts</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={onlineProductImg5} alt="" />
              <p className="absolute bottom-10 left-1/3 text-2xl">Salads</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OrderOnline;
