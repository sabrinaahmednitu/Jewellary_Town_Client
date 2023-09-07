/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import Diamonds from './Diamond/Diamonds';
import Golds from './Gold/Golds';
import './Jewellary.css';
import Platinums from './Platinum/Platinums';
import video from '../../video/pexels-cottonbro-9428860 (1080p).mp4';
import ReactPlayer from 'react-player';
import bride1 from '../../video/bride1.jpeg';
import bride2 from '../../video/bride2.jpg';
import bride3 from '../../video/bride3.jpg';
import range1 from '../../video/G.earring2.avif';
import icon1 from '../../video/icon1.png';
import icon2 from '../../video/icon2.png';
import icon3 from '../../video/icon3.png';
import icon4 from '../../video/icon4.png';
import icon5 from '../../video/icon5.png';
import { Tab, Tabs } from 'react-tabs';
import Gold from './Gold/Gold';
import Diamond from './Diamond/Diamond';
import ring from '../../video/22KTDIJRA18958_1.png';
import left from '../../video/heading_left.png';
import right from '../../video/heading_right.png';
import review1 from '../../video/review1.png';
import review2 from '../../video/review2.png';
import review3 from '../../video/review3.png';
import Slider from 'react-slick';
import related1 from '../../video/related1.jpg'
import related2 from '../../video/related2.jpg'
import related3 from '../../video/related3.jpg'
import related4 from '../../video/related4.jpg'
import { useNavigate } from 'react-router-dom';




function Jewellary() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

   const settings = {
     dots: true,
     infinite: true,
     arrows: false,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
     responsive: [
       {
         breakpoint: 576, // Breakpoint for screens with a width of 576px or less
         settings: {
           slidesToShow: 1, // Number of cards to show for screens less than 576px
         },
       },
       {
         breakpoint: 1000, // Breakpoint for screens with a width of 768 or less
         settings: {
           slidesToShow: 2, // Number of cards to show for screens less than 576px
         },
       },
     ],
   };

  const Navigate = useNavigate();
  const goToGold = () => {
    Navigate('/pearl');
  };
  return (
    <>
      {/* video section */}

      <div className="bg-white homeMain ">
        <div className="main-content d-flex w-50 mx-auto">
          <div className="video-overlay">
            <h1 className="text-5xl z-5">
              DESIGNED JUST <br />
              <span className="text-7xl font-bold foryou ">FOR YOU</span> <br />
              The Special One 🥰
            </h1>
          </div>
          <video autoPlay loop className="mainVideo">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* tabs section */}

      <div
        className="Container  pt-10 pb-12"
        style={{
          backgroundColor: 'rgb(211, 212, 211)',
        }}
      >
        <h1 className="text-3xl text-center text-black font-bold mb-5">
          <span
            className="text-4xl"
            style={{
              color: 'rgb(255, 0, 85)',
            }}
          >
            {' '}
            Gold
          </span>{' '}
          Collection
        </h1>
        <Golds></Golds>

        <button onClick={goToGold} className="btn block text-white mx-auto mt-12 w-[335px]">
          All Gold Collections
        </button>
      </div>

      <div
        className="Container pt-10 pb-12"
        style={{
          backgroundColor: 'rgb(211, 212, 211)',
        }}
      >
        <h1 className="text-3xl text-center text-black font-bold mb-5">
          <span
            className="text-4xl"
            style={{
              color: 'rgb(255, 0, 85)',
            }}
          >
            Diamond{' '}
          </span>{' '}
          Collection
        </h1>
        <Diamonds></Diamonds>
        <button className="btn block text-white mx-auto mt-12 w-[335px]">
          All Diamonds Collections
        </button>
      </div>
      <div
        className="Container pt-12 pb-12"
        style={{
          backgroundColor: 'rgb(211, 212, 211)',
        }}
      >
        <h1 className="text-3xl text-center text-black font-bold mb-5">
          <span
            className="text-4xl"
            style={{
              color: 'rgb(255, 0, 85)',
            }}
          >
            Platinum{' '}
          </span>{' '}
          Collection
        </h1>
        <Platinums></Platinums>
        <button className="btn text-white block mx-auto mt-12 w-[335px]">
          All Platinum Collections
        </button>
      </div>

      {/* tabs section */}

      {/* bride section */}
      <div className="bg-white">
        <div className=" brideMain pt-12 pb-12 container mx-auto">
          <div className="brideImage">
            <img
              src={bride1}
              className="lg:w-[260px] lg:h-[350px] md:w-[260px] md:h-[250px] sm:w-[100%] object-cover"
              alt=""
            />
            {/* <img
              src={bride2}
              className="lg:w-[260px] lg:h-[350px] md:w-[260px] md:h-[250px] sm:w-[100%] object-cover"
              alt=""
            /> */}
            <img
              src={bride3}
              className="lg:w-[260px] lg:h-[350px] md:w-[260px] md:h-[250px] sm:w-[100%] object-cover"
              alt=""
            />
          </div>
          <div className="brideText">
            <h3 className="text-2xl">
              Every journey has a beginning, P.C. Chandra Jewellers began in
              1939 and grew to be India's one of the largest jewellery house
              with a legacy of over eight decades.
            </h3>
            <div className="text-xl mt-3">
              The founder, Shri. Purna Chandra Chandra’s vision and passion for
              creating bold and legendary jewellery designs, has been able to
              carve a way for the company to establish trust amongst its
              customers for generations now.
            </div>
            <button className="btn btn-danger mt-3">Details</button>
          </div>
        </div>
      </div>
      {/* bride section */}

      {/* shop by range */}
      <div className="ShopByRange">
        <div className="ShopByRangeMain container mx-auto pt-12 pb-10">
          <div className="rangeText text-center text-black">
            <h1 className="text-3xl mb-2">Shop by Range</h1>
            <p>
              Discover our exclusive jewellery in versatile designs that fits
              every budget with poise and glamour.
            </p>
          </div>
          <div className="rangeCards mt-10 mb-12">
            <div className="rangeCard ">
              <div className="Rtext">
                <h1 className="text-xl">Shop Under</h1>
                <h1 className="text-3xl">$ 10,000</h1>
              </div>
              <div className="Rimg">
                <img src={ring} alt="" />
              </div>
            </div>
            <div className="rangeCard">
              <div className="Rtext">
                <h1 className="text-xl">Shop Under</h1>
                <h1 className="text-3xl">$ 20,000</h1>
              </div>
              <div className="Rimg">
                <img src={ring} alt="" />
              </div>
            </div>
            <div className="rangeCard">
              <div className="Rtext">
                <h1 className="text-xl">Shop Under</h1>
                <h1 className="text-3xl">$ 30,000</h1>
              </div>
              <div className="Rimg">
                <img src={ring} alt="" />
              </div>
            </div>
            <div className="rangeCard">
              <div className="Rtext">
                <h1 className="text-xl">Shop Under</h1>
                <h1 className="text-3xl">$ 40,000</h1>
              </div>
              <div className="Rimg">
                <img src={ring} alt="" />
              </div>
            </div>
            <div className="rangeCard">
              <div className="Rtext">
                <h1 className="text-xl">Shop Under</h1>
                <h1 className="text-3xl">$ 50,000</h1>
              </div>
              <div className="Rimg">
                <img src={ring} alt="" />
              </div>
            </div>
            <div className="rangeCard">
              <div className="Rtext">
                <h1 className="text-xl">Shop Under</h1>
                <h1 className="text-3xl">$ 90,000</h1>
              </div>
              <div className="Rimg">
                <img src={ring} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* shop by range */}
      {/* shop with confidence */}
      <div className="certificate">
        <div className="certificate-main pt-5 pb-5">
          <h1 className="text-4xl text-center pt-5 text-black ">
            Shop with Confidence
          </h1>
          <div className="certificates-cards mt-12 pb-12">
            <div className="certificates-card hover:shadow-xl py-3">
              <img src={icon1} alt="" />
              <p>
                Handcrafted <br /> Jewellery
              </p>
            </div>
            <div className="certificates-card shadow-xl py-3">
              <img src={icon2} alt="" />
              <p>
                100% Certified <br /> Jewellery
              </p>
            </div>
            <div className="certificates-card hover:shadow-xl py-3">
              <img src={icon3} alt="" />
              <p>
                Lifetime Exchange <br /> and Buyback
              </p>
            </div>
            <div className="certificates-card hover:shadow-xl py-3">
              <img src={icon4} alt="" />
              <p>
                Trust of P.C. Chandra <br /> Jewellers
              </p>
            </div>
            <div className="certificates-card hover:shadow-xl py-3">
              <img src={icon5} alt="" />
              <p>
                Over 2 Million <br /> Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* shop with confidence */}

      {/*  Related Article */}
      <section className=" pt-12 pb-12 container mx-auto">
        <div className="related-main max-w-screen-xl mx-auto">
          <div className="related-heading">
            <h1 className="text-3xl text-black mb-2">Related Article</h1>
            <hr />
          </div>
          <div className="related-cards grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-content-center align-items-center">
            <div className="related-card max-w-[300px] mx-auto rounded-xl border mt-10 ">
              <img
                className="h-[200px] w-[300px] sm:w-[100%] object-cover"
                src={related3}
                alt=""
              />
              <div className="p-5">
                <h1 className="text-xl mb-3">
                  Ruby on Rose Accessories and Blue Gemstones
                </h1>
                <p>
                  <small>August 16, 2018 No Comments</small>
                </p>
              </div>
            </div>
            <div className="related-card  max-w-[300px] mx-auto rounded-xl border mt-10">
              <img
                className="h-[200px] w-[300px] sm:w-[100%] object-cover"
                src={related2}
                alt=""
              />
              <div className="p-5">
                <h1 className="text-xl mb-3">
                  Ruby on Rose Accessories and Blue Gemstones
                </h1>
                <p>
                  <small>August 16, 2018 No Comments</small>
                </p>
              </div>
            </div>
            <div className="related-card   max-w-[300px] mx-auto rounded-xl border mt-10">
              <img
                className="h-[200px] w-[300px] sm:w-[100%] object-cover"
                src={related1}
                alt=""
              />
              <div className="p-5">
                <h1 className="text-xl mb-3">
                  Ruby on Rose Accessories and Blue Gemstones
                </h1>
                <p>
                  <small>August 16, 2018 No Comments</small>
                </p>
              </div>
            </div>
            <div className="related-card  max-w-[300px] mx-auto rounded-xl border mt-10">
              <img
                className="h-[200px] w-[300px] sm:w-[100%] object-cover"
                src={related4}
                alt=""
              />
              <div className="p-5">
                <h1 className="text-xl mb-3">
                  Ruby on Rose Accessories and Blue Gemstones
                </h1>
                <p>
                  <small>August 16, 2018 No Comments</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Related Article */}

      {/*Customer review*/}
      <section className="review-main  pt-12 pb-12">
        <div className="Teams-head mb-5 ">
          <img className="w-[100px]" src={left} alt="" />
          <h1 className="text-2xl text-black">Testimonials</h1>
          <img className="w-[100px]" src={right} alt="" />
        </div>
        <div className="reviews container mx-auto">
          <Slider {...settings} className="review-slider">
            <div className="review">
              <img className="rounded-full bg-gray-300" src={review1} alt="" />
              <div className="review-text">
                <h1>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has ...
                </h1>
                <h2>- Mr. Reema Cyrus </h2>
              </div>
            </div>
            <div className="review">
              <img className="rounded-full bg-gray-300" src={review2} alt="" />
              <div className="review-text">
                <h1>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has ...
                </h1>
                <h2>- Stephnie MacMohan </h2>
              </div>
            </div>
            <div className="review">
              <img className="rounded-full bg-gray-300" src={review3} alt="" />
              <div className="review-text">
                <h1>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has ...
                </h1>
                <h2>- Dr. Nidhen Johen</h2>
              </div>
            </div>
            <div className="review">
              <img className="rounded-full bg-gray-300" src={review3} alt="" />
              <div className="review-text">
                <h1>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has ...
                </h1>
                <h2>- Dr. Nidhen Johen</h2>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*  Customer review */}
    </>
  );
}

export default Jewellary;
