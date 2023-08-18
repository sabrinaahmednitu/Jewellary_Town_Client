/* eslint-disable react/prop-types */
const Platinum = ({ platinum }) => {
  const { image, title, description, price } = platinum;
  return (
    <div>
      <div
        className="card "
        style={{
          // border: '2px solid rgb(255, 0, 85)',
          // boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
          color: 'black',
          backgroundColor: '#ced7d8',
        }}
      >
        <figure>
          <img
            // className="lg:w-[360px] lg:h-[350px] md:w-[360px] md:h-[350px] sm:w-[100%]"
            className="lg:w-[100%] lg:h-[300px] md:w-[100%] md:h-[300px] sm:w-[100%] object-fit"
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
              width: '60%',
              margin: 'auto',
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
