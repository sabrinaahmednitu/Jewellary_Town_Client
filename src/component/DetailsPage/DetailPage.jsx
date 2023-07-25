/* eslint-disable no-undef */
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Hooks/AuthProvider';
import './DetailPage.css';
const DetailPage = () => {
  const allGoldsData = useLoaderData();
  console.log(allGoldsData);

  const { user } = useContext(AuthContext);
  console.log('user', user);
  

  const handleBooking = (event) => {
    event.preventDefault();
    const addItems = {
      jewellaryId: _id,
      displayName: user?.displayName,
      email:user?.email,
      jewellaryName: allGoldsData.title,
      price: allGoldsData.price,
      
    }
       }




  return (
    <div className="mt-20 mb-20 text-black container mx-auto pt-10 pb-10">
      <div className="detail-content flex justify-center align-items-center">
        {/* detail 1 */}
        <form
          onSubmit={handleBooking}
          className="detail-input flex justify-center align-items-center  basis-5/12 flex-col gap-5 "
        >
          <input
            type="text"
            value={user?.displayName}
            className="input w-full "
          />
          <input type="email" value={user?.email} className="input w-full " />

          <input
            type="text"
            placeholder="Type PhoneNumber"
            className="input w-full "
          />
          <input
            type="text"
            defaultValue={allGoldsData.title}
            placeholder="Type here"
            className="input w-full"
          />
          <input
            type="text"
            defaultValue={allGoldsData.price}
            placeholder="Type here"
            className="input w-full bg-transparent"
          />
          <button className=" btn detail-btn w-full">Add to Cart </button>
        </form>
        {/* detail 2 */}
        <div className="detail-card flex justify-center align-items-center  mx-auto basis-3/6 p-10">
          {/* details-text */}
          <div className="details-text basis-3/6 mr-5 text-white" id="Dtext">
            <h1 className="text-4xl mb-4">{allGoldsData.title}</h1>
            <p className="mb-4 ">{allGoldsData.description}</p>
            <p>{user?.email}</p>
            <p>{user?.email}</p>

            <div className="priceQuantity">
              <h2 className="text-3xl mb-5">{allGoldsData.price} $</h2>
              <div className="quantity">
                <div className="Q-text text-black">
                  <span> - </span>
                  <div>1</div>
                  <span> + </span>
                </div>
              </div>
            </div>
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
