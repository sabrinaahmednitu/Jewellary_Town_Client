/* eslint-disable react/prop-types */


const PearlCards = ({ gold, handleGolds }) => {
  const { title, image, description, price, _id } = gold;
  return (
    <div>
      <div
        className="card h-[60vh] "
        style={{
          border: '2px solid rgb(255, 0, 85)',
          color: 'black',
          backgroundColor: 'white',
        }}
      >
        <figure>
          <img className="w-[100%]" src={image} alt="Shoes" />
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
          <p>{description}</p>

          <div className="card-actions justify-start">
            <button
              onClick={() => handleGolds(_id)}
              className="btn text-white font-bold d-block mx-auto w-[50%]"
              style={{
                backgroundColor: 'rgb(255, 0, 85)',
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

export default PearlCards;