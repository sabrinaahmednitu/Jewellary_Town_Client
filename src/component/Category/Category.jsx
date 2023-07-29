/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const Category = ({ allProduct }) => {
  const { image, description, price, title, _id } = allProduct;
  return (
    <div>
      <div
        className="card h-[65vh] "
        style={{
          border: '2px solid rgb(255, 0, 85)',

          color: 'white',
        }}
      >
        <figure>
          <img className="w-[100%]" src={image} alt="Shoes" />
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
          <div className="card-actions justify-start">
            <Link to={`/detailPage/${allProduct._id}`}>
              <button
                className="btn text-white d-block mx-auto w-[50%]"
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
    </div>
  );
};

export default Category;
