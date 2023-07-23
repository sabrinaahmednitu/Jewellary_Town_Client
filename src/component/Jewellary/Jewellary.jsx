/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Diamonds from './Diamond/Diamonds';
import Golds from './Gold/Golds';
import './Jewellary.css';
import Platinums from './Platinum/Platinums';
import video from '../../video/pexels-cottonbro-9428860 (1080p).mp4';
import ReactPlayer from 'react-player';

function Jewellary() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      {/* video section */}

      <div className="bg-white ">
        <div className="video-wrapper">
          <video  controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="head-text text-center pt-12 pb-12">
          <h1 className="text-5xl">
            DESIGNED JUST <br />{' '}
            <span className="text-7xl font-bold text-black ">FOR YOU</span>
          </h1>
        </div>
      </div>

      {/* tabs section */}

      <div className="mt-12 mb-12 container mx-auto">
        <div className="bloc-tabs text-2xl">
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

        <div className="content-tabs">
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
    </>
  );
}

export default Jewellary;
