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
    const booking = {
      id: user?._id,
      displayName: user?.displayName,
      email: user?.email,
      jewellaryName: allGoldsData.title,
      price: allGoldsData.price,
      phone: event.target.phone.value,
      image: allGoldsData.image,
    };
    fetch('http://localhost:5000/booking', {
      method: "POST",
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(booking)
    })
      .then(res => res.json())
    .then(data=>console.log(data))
       }




  return (
    <div className="pt-20 pb-20 text-black bg-black ">
      <div className="detail-content flex justify-center align-items-center container mx-auto pt-12 pb-10">
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
            name="phone"
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
          <input
            type="text"
            defaultValue={allGoldsData.image}
            disabled
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
            <h2 className="text-3xl mb-5">{allGoldsData.price} $</h2>
            <div className="quantity">
              <div className="Q-text text-black">
                <span> - </span>
                <div>1</div>
                <span> + </span>
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
