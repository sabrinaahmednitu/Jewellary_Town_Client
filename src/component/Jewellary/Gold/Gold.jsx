/* eslint-disable react/prop-types */

const Gold = ({ gold, handleGolds }) => {
  const { title, image, description, price, _id } = gold;

  return (
    <div  >
      <div
        className="card h-[100%] bg-base-100 "
      >
        <figure>
          <img className="w-[100%]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>${price}</p>
          <div className="card-actions justify-start">
            <button
              onClick={() => handleGolds(_id)}
              className="btn text-white font-bold d-block mx-auto w-[50%]"
              style={{
                backgroundColor: 'rgb(243, 62, 101)',
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

export default Gold;