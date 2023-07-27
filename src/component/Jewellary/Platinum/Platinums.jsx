import { useEffect, useState } from 'react';
import AllJewellaryItems from '../../../Hooks/AllJewellaryItems';
import Platinum from './Platinum';

const Platinums = () => {
     const [jewellary, setJewellary] = useState([]);

     useEffect(() => {
       fetch('http://localhost:5000/golds')
         .then((res) => res.json())
         .then((data) => setJewellary(data[0].platinum));
     }, []);
  return (
    <div className="container mx-auto">
      <h1>{jewellary.length} platinums collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {jewellary.map((platinum) => (
          <Platinum key={platinum._id} platinum={platinum}></Platinum>
        ))}
      </div>
    </div>
  );
};

export default Platinums;
