import AllJewellaryItems from '../../../Hooks/AllJewellaryItems';
import Platinum from './Platinum';

const Platinums = () => {
  const [golds] = AllJewellaryItems();
  return (
    <div className="container mx-auto">
      <h1>{golds.length} platinums collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {golds.slice(20, 30).map((platinum) => (
          <Platinum key={platinum._id} platinum={platinum}></Platinum>
        ))}
      </div>
    </div>
  );
};

export default Platinums;
