/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Diamond = ({ diamond, handleGolds }) => {
  const { image, description, price, title ,_id } = diamond;
  return (
    <div>
      <div
        className="card"
        style={{
          // border: '2px solid rgb(255, 0, 85)',
          color: 'black',
          backgroundColor: 'white',
          // backgroundColor: '#ced7d8',
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
          <h2 className="card-title ">{title}</h2>
          <p
            className="font-bold text-2xl "
            style={{
              color: 'rgb(255, 0, 85)',
            }}
          >
            ${price}
          </p>
          <p>{description.slice(0, 44)}...</p>

          {/* <div className="card-actions justify-center"> */}
          <Link
            className="btn text-white "
            to={`/detailPage/${diamond._id}`}
            onClick={() => handleGolds(_id)}
            style={{
              backgroundColor: 'rgb(255, 0, 85)',
              border: 'none',
              width: '60%',
              margin: 'auto',
            }}
          >
            Buy Now
          </Link>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Diamond;