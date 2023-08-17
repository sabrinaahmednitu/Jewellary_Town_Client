/* eslint-disable react/prop-types */
const Platinum = ({ platinum }) => {
  const { image, title, description, price } = platinum;
  return (
    <div>
      <div
        className="card "
        style={{
          // border: '2px solid rgb(255, 0, 85)',
          color: 'black',
        }}
      >
        <figure>
          <img
            className="lg:w-[360px] lg:h-[350px] md:w-[360px] md:h-[350px] sm:w-[100%]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
          <p
            className="font-bold text-2xl "
            style={{
              color: 'rgb(255, 0, 85)',
            }}
          >
            ${price}
          </p>
          <p>{description.slice(0, 44)}...</p>

          <div
            className="btn text-white"
            style={{
              backgroundColor: 'rgb(255, 0, 85)',
              border: 'none',
            }}
          >
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platinum;
