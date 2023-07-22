
const SocialLogin = () => {
  return (
    <div className="">
      <div className="flex align-items-center w-[75%] mx-auto mt-2 mb-5">
        <div style={{ height: '1px' }} className="bg-black w-[50%] mt-3"></div>
        <p className="px-2 text-black font-bold">OR</p>
        <div style={{ height: '1px' }} className="bg-black w-[50%] mt-3"></div>
      </div>
      <div className="form-control mt-2">
        <button className="btn text-white bg-black-200">
          Continue with google
        </button>
      </div>
      <div className="form-control mt-2">
        <button className="btn text-white bg-black-200">
          Continue with github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
