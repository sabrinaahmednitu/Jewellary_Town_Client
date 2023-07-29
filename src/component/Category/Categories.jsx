
import { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
      const [jewellary, setJewellary] = useState([]);

      useEffect(() => {
        fetch('http://localhost:5000/golds')
          .then((res) => res.json())
          .then(
            (data) =>
              setJewellary(
                data[0]?.diamond,
                data[0]?.pearl,
                data[0]?.gold,
                data[0]?.platinum
              )

            // data[0].diamond,
            // data[1].gold,
            // data[2].pearl,
            // data[3].platinum
          );
      }, []);
    return (
      <div className="container mx-auto mt-12 mb-12">
        <h1 className="text-3xl text-center mb-3">Choose your desire one</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {jewellary.map((allProduct) => (
            <Category key={allProduct._id} allProduct={allProduct}></Category>
          ))}
        </div>
      </div>
    );
};

export default Categories;