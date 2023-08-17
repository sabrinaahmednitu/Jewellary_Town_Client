/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Gold = ({ gold, handleGolds }) => {
  const { title, image, description, price, _id } = gold;

  return (
    <div>
      <div
        className="card "
        style={{
          color: 'black',
          backgroundColor: 'white',
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
          <p>{description.slice(0,44)}...</p>

        
            <Link
              to={`/detailPage/${gold._id}`}
              onClick={() => handleGolds(_id)}
              className="btn text-white"
              style={{
                 backgroundColor: 'rgb(255, 0, 85)',
                border:'0'
              }} >
               Buy Now
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Gold;