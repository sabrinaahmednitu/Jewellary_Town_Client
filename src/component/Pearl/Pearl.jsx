import './Pearl.css';
import p1 from '../../video/p.pendent4.avif';
import { useEffect, useState } from 'react';
import PearlCards from './PearlCards';
// import p1 from '../../video/pexels-cottonbro-9428860 (1080p).mp4';

const Pearl = () => {
  const [jewellary, setJewellary] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/golds')
      .then((res) => res.json())
      .then((data) => setJewellary(data[0].pearl));
  }, []);

  const handleGolds = (_id) => {
    console.log('this is id', _id);
  };
  return (
    <>
      <h1 className="text-black font-bold text-3xl text-center"></h1>

      <div className="pearl-header bg-base-300">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img className="w-[100%]" src={p1} alt="" />
            {/* <video className="w-[50%] h-auto" controls src={p1}></video> */}
            <div className="">
              <h1
                className="text-5xl font-bold "
                style={{
                  color: 'rgb(255, 0, 85)',
                }}
              >
                Pearls For You
              </h1>
              <p className="text-2xl py-3">
                We are providing the natural pearl, Perhaps the best-loved gems
                of all time
              </p>
              <p className="py-6">
                Natural pearls form in the bodies, or mantle tissue, of certain
                molluscs, usually around a microscopic irritant, and always
                without human help of any kind.
                <br /> Pearls—occur in a wide variety of colours. The most
                familiar colours are white and cream (a light yellowish brown).
                Black, grey and silver are also fairly common, but the palette
                of pearl colours extends to every hue.
                <br /> The main colour, or bodycolour, is often modified by
                additional colours called overtones, which are typically pink
                (sometimes called rosé), green, purple or blue. Some pearls also
                show the iridescent phenomenon known as orient.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 mb-12">
        <h1 className="text-center text-3xl text-white mb-8">Exclusive <span className='text-5xl' style={{color: 'rgb(255, 0, 85)'}}>Pearl</span> Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {jewellary?.map((gold) => (
            <PearlCards
              key={gold._id}
              gold={gold}
              handleGolds={handleGolds}
            ></PearlCards>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pearl;
