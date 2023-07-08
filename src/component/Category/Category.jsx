/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Category = ({ allProduct}) => {
  const { image, description, price, title, _id } = allProduct;
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
          <p>${_id}</p>
          <div className="card-actions justify-start">
            <Link to={`/detailPage/${allProduct._id}`}>
              <button className="btn btn-primary"> Buy Now </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;