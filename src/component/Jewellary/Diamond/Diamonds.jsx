import { useEffect, useState } from "react";
import Diamond from "./Diamond";


const Diamonds = () => {
      const [jewellary, setJewellary] = useState([]);

      useEffect(() => {
        fetch('http://localhost:5000/golds')
          .then((res) => res.json())
          .then((data) => setJewellary(data[0].diamond));
      }, []);
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {jewellary?.map((diamond) => (
            <Diamond key={diamond._id} diamond={diamond}></Diamond>
          ))}
        </div>
      </div>
    );
};

export default Diamonds;