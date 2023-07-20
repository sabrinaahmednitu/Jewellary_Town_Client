import React, { useEffect, useState } from 'react';

const Gold = () => {
    const [allGolds, setAllGolds] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jewellary/')
            .then(res => res.json())
        .then(data=>setAllGolds(data))
    },[])
    return [allGolds, setAllGolds]
};

export default Gold;

