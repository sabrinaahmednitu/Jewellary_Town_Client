import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Hooks/AuthProvider";


const SocialLogin = () => {
  const { googleLoginInProvider, githubSignUp, verifyEmail } =
    useContext(AuthContext);
  
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //  for Google SignIn

  const handleGoogleSignIn = () => {
    googleLoginInProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        alert(' Thank you !!!', 'Your account has been created');
        verifyEmail();
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  // for github SignUp;
  const handleGitHub = () => {
    githubSignUp(githubProvider).then((result) => {
      const user = result.user;
      console.log(user);
      verifyEmail();
      navigate('/');
    })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <div className="flex align-items-center w-[75%] mx-auto mt-2 mb-5">
        <div style={{ height: '1px' }} className="bg-black w-[50%] mt-3"></div>
        <p className="px-2 text-black font-bold">OR</p>
        <div style={{ height: '1px' }} className="bg-black w-[50%] mt-3"></div>
      </div>
      {/*  google button */}
      <div className="form-control mt-2">
        <button
          onClick={handleGoogleSignIn}
          className="btn text-white bg-black-200  w-[75%] max-w-md mx-auto"
        >
          Continue with google
        </button>
      </div>
      {/* and github button */}
      <div className="form-control mt-2">
        <button
          onClick={handleGitHub}
          className="btn text-white bg-black-200 w-[75%] max-w-md mx-auto"
        >
          Continue with github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
