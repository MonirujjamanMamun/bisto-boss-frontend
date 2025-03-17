import { useEffect, useState } from 'react';
import Title from '../../Share/Title/Title';
import { FaQuoteLeft } from 'react-icons/fa';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/review`)
      .then((res) => res.json())
      .then((data) => setComment(data.reviews));
  }, []);

  return (
    <div className="my-11">
      <Title subHading={'What Our Clients Say'} hading={'TESTIMONIALS'} />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {comment?.length > 0 ? (
            comment?.map((data) => (
              <SwiperSlide key={data._id}>
                <div className="grid place-items-center text-center my-5">
                  <Rating
                    className="my-3"
                    style={{ maxWidth: 180 }}
                    value={data?.rating}
                    readOnly
                  />
                  <FaQuoteLeft className="w-24 h-24 my-3" />
                </div>
                <div className="text-center p-5">
                  <p>{data?.details}</p>
                  <h3 className="text-3xl text-[#CD9003]">{data.name}</h3>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="text-center my-5">No testimonials available.</p> // ✅ Show message if empty
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
