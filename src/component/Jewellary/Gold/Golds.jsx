import { useEffect, useState } from "react";
import Gold from "./Gold";

const Golds = () => {
    const [golds, setGolds] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/golds')
            .then(res => res.json())
            .then(data => setGolds(data));
    }, [])
    const handleGolds = _id => {
        console.log('this is id',_id);
    }
    return (
      <div>
        <h1>{golds.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {golds.map((gold) => (
              <Gold key={gold._id} gold={gold}
              handleGolds={handleGolds}
              ></Gold>
          ))}
        </div>
      </div>
    );
};

export default Golds;