import { useLoaderData } from "react-router-dom";
import './DetailPage.css'
const DetailPage = () => {
    const allGoldsData = useLoaderData();
    console.log(allGoldsData)
    return (
      <div className="mt-20 mb-20 text-black container mx-auto">
        <div className="detail-content flex justify-center align-items-center ">
          {/* detail 1 */}
          <div className="detail-input flex justify-center align-items-center  basis-3/6 flex-col gap-5 ">
            <input
              type="text"
              placeholder="Type here"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full "
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full "
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full "
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full "
            />
          </div>
          {/* detail 2 */}
          <div className="detail-card flex justify-center align-items-center  mx-auto basis-5/12">
            {/* details-text */}
            <div className="details-text basis-3/6 mr-5" id="Dtext">
              <h1 className="text-4xl mb-4">{allGoldsData.title}</h1>
              <p className="mb-4 ">{allGoldsData.description}</p>
              <div className="priceQuantity">
                <h2 className="text-3xl mb-5">{allGoldsData.price} $</h2>
                <div className="quantity">
                  <div className="Q-text">
                    <span> - </span>
                    <div>1</div>
                    <span> + </span>
                  </div>
                </div>
              </div>
              <button className=" btn detail-btn">Add to Cart </button>
            </div>
            {/* detail-img */}
            <div className="detail-img basis-5/12" id="Dimg">
              <img className="w-[100%] rounded" src={allGoldsData.image}></img>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailPage;