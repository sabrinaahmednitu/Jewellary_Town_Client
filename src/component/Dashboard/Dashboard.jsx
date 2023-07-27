import { Link, NavLink, Outlet } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open bg-white text-black">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <h2 className="text-3xl"> Dashboard</h2>
        {/* Page content here */}
        <Outlet></Outlet>

        {/* <label
          htmlFor="dashboard-sidebar"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-white  text-base text-black font-bold">
          {/* Sidebar content here */}

          <li>
            <NavLink to="/dashboard/myorder">My Order</NavLink>
          </li>

          <li>
            <Link to="/dashboard/addjewellary">Add Jewellary</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
