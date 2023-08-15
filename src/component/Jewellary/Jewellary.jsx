/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Diamonds from './Diamond/Diamonds';
import Golds from './Gold/Golds';
import './Jewellary.css';
import Platinums from './Platinum/Platinums';
import video from '../../video/pexels-cottonbro-9428860 (1080p).mp4';
import ReactPlayer from 'react-player';
import bride1 from '../../video/bride1.jpeg'
import bride2 from '../../video/bride2.jpg'
import bride3 from '../../video/bride3.jpg'

function Jewellary() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
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

      <div className="mt-12 mb-12 container mx-auto ">
        <div className="bloc-tabs text-2xl ">
          <button
            className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(1)}
          >
            Gold
          </button>
          <button
            className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(2)}
          >
            Diamond
          </button>
          <button
            className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(3)}
          >
            Platinum
          </button>
        </div>

        <div className="content-tabs ">
          <div
            className={
              toggleState === 1 ? 'content  active-content' : 'content'
            }
          >
            <Golds></Golds>
          </div>

          <div
            className={
              toggleState === 2 ? 'content  active-content' : 'content'
            }
          >
            <Diamonds></Diamonds>
          </div>

          <div
            className={
              toggleState === 3 ? 'content  active-content' : 'content'
            }
          >
            <Platinums></Platinums>
          </div>
        </div>
      </div>

      {/* bride section */}
      <div className="bg-white brideMain">
        <div className="brideImage">
          <img
            src={bride1}
            className="lg:w-[260px] lg:h-[250px] md:w-[260px] md:h-[250px] sm:w-[100%] object-cover"
            alt=""
          />
          <img
            src={bride2}
            className="lg:w-[260px] lg:h-[250px] md:w-[260px] md:h-[250px] sm:w-[100%] object-cover"
            alt=""
          />
          <img
            src={bride3}
            className="lg:w-[260px] lg:h-[250px] md:w-[260px] md:h-[250px] sm:w-[100%] object-cover"
            alt=""
          />
        </div>
        <div className="brideText">
          <h3>
            Every journey has a beginning, P.C. Chandra Jewellers began in 1939
            and grew to be India's one of the largest jewellery house with a
            legacy of over eight decades.
          </h3>
          <div>
            The founder, Shri. Purna Chandra Chandra’s vision and passion for
            creating bold and legendary jewellery designs, has been able to
            carve a way for the company to establish trust amongst its customers
            for generations now.
          </div>
          <button className='btn btn-secondary' ></button>
        </div>
      </div>
      {/* bride section */}
    </>
  );
}

export default Jewellary;
