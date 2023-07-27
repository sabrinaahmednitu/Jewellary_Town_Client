
import { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import Gold from "./Gold";

const Golds = () => {
  // const [golds] = AllJewellaryItems();
  const [jewellary, setJewellary] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:5000/golds')
      .then((res) => res.json())
      .then((data) => setJewellary(data[0].gold));
  },[])


  if (jewellary.length == 0) {
    return <Loading></Loading>;
  }

    const handleGolds = _id => {
        console.log('this is id',_id);
    }
    return (
      <div className="container mx-auto">

        <h1>{jewellary.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {jewellary?.map((gold) => (
            <Gold key={gold._id} gold={gold} handleGolds={handleGolds}></Gold>
          ))}
        </div>
      </div>
    );
};

export default Golds;