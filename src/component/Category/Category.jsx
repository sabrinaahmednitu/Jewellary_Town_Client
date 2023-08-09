/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const Category = ({ allProduct }) => {
  const { image, description, price, title, _id } = allProduct;
  return (
    <div>
      <div
        className="card"
        style={{
          border: '2px solid rgb(255, 0, 85)',

          color: 'white',
        }}
      >
        <figure>
          <img
            className="lg:w-[370px] lg:h-[350px] md:w-[370px] md:h-[350px] sm:w-[100%]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <p
            className="font-bold text-2xl "
            style={{
              color: 'rgb(255, 0, 85)',
            }}
          >
            ${price}
          </p>
          <h2 className="card-title font-bold">{title}</h2>

          <p>{description}</p>

          <p>${_id}</p>

          <Link
            to={`/detailPage/${allProduct._id}`}
            className=" text-white d-block mx-auto "
          >
            <button
              className="btn text-white"
              style={{
                backgroundColor: 'rgb(255, 0, 85)',
              }}
            >
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
