/* eslint-disable no-dupe-keys */
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Loading from '../../Shared/Loading/Loading';
import Gold from './Gold';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

    

   const settings = {
     dots: true,
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     pauseOnHover: true,
     arrows: false,
    
   };

  return (
    <div className="container mx-auto">
      <div >
        <Slider {...settings}>
            {golds.map((gold) => (
              <Gold
                key={gold._id}
                gold={gold}
                handleGolds={handleGolds}
              ></Gold>
            ))}
        
        </Slider>
      </div>
    </div>
  );
};

export default Golds;
