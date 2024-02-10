/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Gold = ({ gold, handleGolds }) => {
  const { title, image, description, price, _id } = gold;

  return (
    <div>
      <div
        className="card"
        style={{
          color: 'black',
          backgroundColor: 'white',
          margin: '10px',
        }}
      >
        <figure>
          <img
            className="lg:w-[100%] lg:h-[300px] md:w-[100%] md:h-[300px] sm:w-[100%] object-fit"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p
            className="font-bold text-2xl "
            style={{
              color: 'rgb(255, 0, 85)',
            }}
          >
            ${price}
          </p>
          <div>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i> (53 people rating us)
          </div>
          <p>{description.slice(0, 44)}...</p>

          <Link
            to={`/detailPage/${gold._id}`}
            onClick={() => handleGolds(_id)}
            className="btn text-white"
            style={{
              backgroundColor: 'rgb(255, 0, 85)',
              border: '0',
              width: '60%',
              margin: 'auto',
            }}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gold;