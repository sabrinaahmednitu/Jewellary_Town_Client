import { useState } from 'react';
import Diamonds from './Diamond/Diamonds';
import Golds from './Gold/Golds';
import './Jewellary.css';
import Platinums from './Platinum/Platinums';

function Jewellary() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="bg-white">
        <div className="head-text text-center pt-12 pb-12">
          <h1 className="text-5xl">
            DESIGNED JUST <br />{' '}
            <span className="text-7xl font-bold text-black ">FOR YOU</span>
          </h1>
        </div>
      </div>

      <div className="mt-12 mb-12">
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

        <div className="content-tabs ">
          <div
            className={
              toggleState === 1 ? 'content  active-content' : 'content'
            }
            
          >
            <h2>Content 1</h2>
            <hr />
            <Golds></Golds>
          </div>

          <div
            className={
              toggleState === 2 ? 'content  active-content' : 'content'
            }
          >
            <h2>Content 2</h2>
            <hr />
            <Diamonds></Diamonds>
          </div>

          <div
            className={
              toggleState === 3 ? 'content  active-content' : 'content'
            }
          >
            <h2>Content 3</h2>
            <hr />
            <Platinums></Platinums>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jewellary;

// import './Jewellary.css'

// const Jewellary = () => {
//     return (
//       <div className="bg-white">
//         <div className="head-text text-center pt-12 pb-12">
//           <h1 className="text-5xl">
//             DESIGNED JUST <br />{' '}
//             <span className="text-7xl font-bold text-black ">FOR YOU</span>
//           </h1>
//         </div>
//         <div className="tab__container flex justify-center ">
//           <div className="tabs mt-5 mb-12 bg-pink-300 rounded">
//             <a className="tab text-2xl text-black text-bold">Gold</a>
//             <a className="tab tab-active text-2xl text-black text-bold">
//               Diamond
//             </a>
//             <a className="tab text-2xl text-black text-bold">Platinam</a>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default Jewellary;
