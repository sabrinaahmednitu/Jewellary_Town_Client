/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Diamonds from './Diamond/Diamonds';
import Golds from './Gold/Golds';
import './Jewellary.css';
import Platinums from './Platinum/Platinums';
import video from '../../video/Harry Winston Diamond Necklace.mp4';

function Jewellary() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      {/* video section */}

      <div className="bg-white">
        <video className="w-[100%] h-[50%]" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="head-text text-center pt-12 pb-12">
          <h1 className="text-5xl">
            DESIGNED JUST <br />{' '}
            <span className="text-7xl font-bold text-black ">FOR YOU</span>
          </h1>
        </div>
      </div>

      {/* tabs section */}

      <div className="mt-12 mb-12  mx-auto">
        <div className="bloc-tabs">
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
            <hr />
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
