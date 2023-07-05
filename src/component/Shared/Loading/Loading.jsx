
import { ColorRing } from 'react-loader-spinner';

const Loading = () => {
    return (
      <div className="mt-5 mb-5">
        <div className="w-100 flex align-center justify-center mt-20 mb-20">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      </div>
    );
};

export default Loading;