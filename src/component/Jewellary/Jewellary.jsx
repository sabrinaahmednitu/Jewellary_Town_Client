import './Jewellary.css'

const Jewellary = () => {
    return (
      <div className="bg-white">
        <div className="head-text text-center pt-12 pb-12">
          <h1 className="text-5xl">
            DESIGNED JUST <br />{' '}
            <span className="text-7xl font-bold text-black ">FOR YOU</span>
          </h1>
        </div>
        <div className="tab__container flex justify-center ">
          <div className="tabs mt-5 mb-12 bg-pink-300 rounded">
            <a className="tab text-2xl text-black text-bold">Gold</a>
            <a className="tab tab-active text-2xl text-black text-bold">
              Diamond
            </a>
            <a className="tab text-2xl text-black text-bold">Platinam</a>
          </div>
        </div>
      </div>
    );
};

export default Jewellary;