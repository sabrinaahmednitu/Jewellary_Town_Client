/* eslint-disable react/prop-types */

const Diamond = ({ diamond }) => {
  const { image, description, price, title } = diamond;
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
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diamond;