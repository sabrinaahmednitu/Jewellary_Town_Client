/* eslint-disable react/prop-types */

const Gold = ({ gold, handleGolds }) => {
  const { title, image, description, price, _id } = gold;

  return (
    <div>
      <div className="card bg-base-100 h-[100%]">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>${price}</p>
          <div className="card-actions justify-start">
            <button
              onClick={() => handleGolds(_id)}
              className="btn btn-primary"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gold;