import { useLoaderData } from "react-router-dom";
import './DetailPage.css'
const DetailPage = () => {
    const allGoldsData = useLoaderData();
    console.log(allGoldsData)
    return (
      <div className="mt-20 mb-20 text-black">
        <div className="detail-card flex justify-center align-items-center w-[50%] mx-auto ">
          <div className="details-text basis-6/12 mr-5" id="Dtext">
            <h1 className="text-4xl mb-4">{allGoldsData.title}</h1>
            <p className="mb-4 ">{allGoldsData.description}</p>
            <h2 className="text-3xl mb-5">{allGoldsData.price} $</h2>
            <button className=" btn detail-btn">Add to Cart </button>
          </div>
          <div className="detail-img basis-6/12" id="Dimg">
            <img className="w-[100%] rounded" src={allGoldsData.image}></img>
          </div>
        </div>
      </div>
    );
};

export default DetailPage;