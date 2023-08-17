
import { useEffect, useState } from 'react';
import Platinum from './Platinum';

const Platinums = () => {
     const [platinums, setPlatinums] = useState([]);
     useEffect(() => {
       fetch('http://localhost:5000/platinums')
         .then((res) => res.json())
         .then((data) => setPlatinums(data));
     }, []);

    
  return (
    <div className="container mx-auto">
      <h1>{platinums.length} platinums collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {platinums.map((platinum) => (
          <Platinum key={platinum._id} platinum={platinum}></Platinum>
        ))}
      </div>
    </div>
  );
};

export default Platinums;
