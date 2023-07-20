/* eslint-disable react/prop-types */
const Platinum = ({ platinum }) => {
  const { image, title, description, price, _id } = platinum;
  return (
    <div>
      <div className="card container  h-[100%]">
        <figure>
          <img className="w-[100%]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>${price}</p>
          <div
            className="btn text-white font-bold d-block mx-auto w-[50%]"
            style={{
              backgroundColor: 'rgb(255, 0, 85)',
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
