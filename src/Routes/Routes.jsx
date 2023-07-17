import { createBrowserRouter } from 'react-router-dom';
import Categories from '../component/Category/Categories';
import AddJewellary from '../component/Dashboard/AddJewellary/AddJewellary';
import Dashboard from '../component/Dashboard/Dashboard';
import MyOrder from '../component/Dashboard/MyOrder/MyOrder';
import Review from '../component/Dashboard/Review/Review';
import DetailPage from '../component/DetailsPage/DetailPage';
import Jewellary from '../component/Jewellary/Jewellary';
import Login from '../component/Shared/Login/Login';
import Signup from '../component/Shared/Signup/Signup';

import Wedding from '../component/Wedding/Wedding';
import Main from '../Layout/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Jewellary></Jewellary>,
      },
      {
        path: '/wedding',
        element: <Wedding></Wedding>,
      },
      {
        path: '/category',
        element: <Categories></Categories>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/myorder',
            element: <MyOrder></MyOrder>,
          },
          {
            path: '/dashboard/addjewellary',
            element: <AddJewellary></AddJewellary>,
          },
          {
            path: '/dashboard/review',
            element: <Review></Review>,
          },
        ],
      },

      {
        path: '/detailPage/:id',
        element: <DetailPage></DetailPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/golds/${params.id}`),
      },
    ],
  },
]);
