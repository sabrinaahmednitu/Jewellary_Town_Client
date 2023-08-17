import { useEffect, useState } from "react";
import Diamond from "./Diamond";


const Diamonds = () => {
    const [diamonds, setDiamonds] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/diamonds')
        .then((res) => res.json())
        .then((data) => setDiamonds(data));
    }, []);

   
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {diamonds.map((diamond) => (
            <Diamond key={diamond._id} diamond={diamond}></Diamond>
          ))}
        </div>
      </div>
    );
};

export default Diamonds;