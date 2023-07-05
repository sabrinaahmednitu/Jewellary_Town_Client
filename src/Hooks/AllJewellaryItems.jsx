import { useEffect, useState } from "react";


const AllJewellaryItems = () => {
   const [golds, setGolds] = useState([]);
   useEffect(() => {
     fetch('http://localhost:5000/golds')
       .then((res) => res.json())
       .then((data) => setGolds(data));
   }, []);
  return [golds, setGolds];
};

export default AllJewellaryItems;