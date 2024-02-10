/* eslint-disable no-dupe-keys */
import { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Gold from './Gold';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const Golds = () => {

 
  const [golds, setGolds] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/golds')
      .then((res) => res.json())
      .then((data) => setGolds(data));
    
    
  }, []);

  if (golds.length == 0) {
    return <Loading></Loading>;
  }

  const handleGolds = (_id) => {
    console.log('this is id', _id);
  };

    
  return (
    <div className="container mx-auto">
      <section>
        <Swiper
          slidesPerView={2}
          freeMode={true}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='flex justify-center'>
              {golds.slice(0, 5).map((gold) => (
                <Gold
                  key={gold._id}
                  gold={gold}
                  handleGolds={handleGolds}
                ></Gold>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Golds;
