
import AllJewellaryItems from '../../Hooks/AllJewellaryItems';
import Category from './Category';

const Categories = () => {
    const [golds] = AllJewellaryItems();
    return (
      <div className="container mx-auto mt-12 mb-12"> 
        <h1 className='text-3xl text-center mb-3'>Choose your desire one</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {golds.map((allProduct) => (
            <Category
              key={allProduct._id}
              allProduct={allProduct}
             
            ></Category>
          ))}
        </div>
      </div>
    );
};

export default Categories;