import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { AuthContext } from '../../../Hooks/AuthProvider';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate('/login');
  }
  const navItem = (
    <>
      <li>
        <Link to="/">Jewellary</Link>
      </li>
      <li>
        <Link to="/pearl">Pearl</Link>
      </li>
      <li>
        <Link to="/category">Category</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className="bg-base-100">
      <div className="navbar bg-base-100 text-white font-bold ">
        <div className="navbar-start container mx-12">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className="normal-case text-xl">Jewellary Town</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>

        <div className="navbar-end mx-12 ">
          {user ? (
            <button
              onClick={logout}
              className=" btn btn-primary font-bold mr-5 "
            >
              SignOut
            </button>
          ) : (
            <Link to="/login" className="px-5">
              Login
            </Link>
          )}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
