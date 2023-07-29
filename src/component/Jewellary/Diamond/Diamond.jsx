/* eslint-disable react/prop-types */

const Diamond = ({ diamond }) => {
  const { image, description, price, title } = diamond;
  return (
    <div>
      <div
        className="card"
        style={{
          border: '2px solid rgb(255, 0, 85)',
          color: 'black',
        }}
      >
        <figure>
          <img
            className="lg:w-[360px] lg:h-[350px] sm:w-[100%]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title font-bold">{title}</h2>
          <p
            className="font-bold text-2xl "
            style={{
              color: 'rgb(255, 0, 85)',
            }}
          >
            ${price}
          </p>
          <p>{description}</p>

          <div className="card-actions justify-start">
            <button
              className="btn text-white font-bold d-block mx-auto w-[50%]"
              style={{
                backgroundColor: 'rgb(255, 0, 85)',
                border: 'none',
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diamond;