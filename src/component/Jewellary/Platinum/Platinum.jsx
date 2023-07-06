/* eslint-disable react/prop-types */
const Platinum = ({ platinum }) => {
  const { image, title, description, price, _id } = platinum;
  return (
    <div>
      <div className="card bg-base-100 h-[100%]">
        <figure>
          <img className="w-[100%]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>${price}</p>
          <div className="card-actions justify-start">
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platinum;
