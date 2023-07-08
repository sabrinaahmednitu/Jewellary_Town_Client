
import AllJewellaryItems from '../../Hooks/AllJewellaryItems';
import Category from './Category';

const Categories = () => {
     const [golds] = AllJewellaryItems();
    return (
      <div className='container mx-auto' >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {golds.map((allProduct) => (
            <Category key={allProduct._id} allProduct={allProduct}></Category>
          ))}
        </div>
      </div>
    );
};

export default Categories;