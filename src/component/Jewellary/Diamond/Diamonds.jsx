import AllJewellaryItems from "../../../Hooks/AllJewellaryItems";
import Diamond from "./Diamond";


const Diamonds = () => {
    const [golds] = AllJewellaryItems();
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {golds.slice(10, 20).map((diamond) => (
            <Diamond key={diamond._id} diamond={diamond}></Diamond>
          ))}
        </div>
      </div>
    );
};

export default Diamonds;