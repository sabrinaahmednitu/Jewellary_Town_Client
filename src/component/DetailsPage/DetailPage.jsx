import { useLoaderData } from "react-router-dom";

const DetailPage = () => {
    const allGoldsData = useLoaderData();
    console.log(allGoldsData)
    return (
      <div>
        <h1>detail</h1>
        <h1>{allGoldsData.title}</h1>
        <img src={allGoldsData.image}></img>
      </div>
    );
};

export default DetailPage;