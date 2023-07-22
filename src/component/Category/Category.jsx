/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Category = ({ allProduct}) => {
  const { image, description, price, title, _id } = allProduct;
  return (
    <div>
      <div
        className="card bg-base-100 h-[100%]"
        style={{
          border: '2px solid rgb(255, 0, 85)',
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        <figure>
          <img className="w-[100%]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
          <p>{description}</p>
          <p
            className="font-bold text-2xl "
            style={{
              color: 'rgb(255, 0, 85)',
            }}
          >
            ${price}
          </p>
          <p>${_id}</p>
          <div className="card-actions justify-start">
            <Link to={`/detailPage/${allProduct._id}`}>
              <button
                className="btn text-white  "
                style={{
                  backgroundColor: 'rgb(255, 0, 85)',
                }}
              >
                {' '}
                Buy Now{' '}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;