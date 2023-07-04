import { createBrowserRouter } from 'react-router-dom';
import Gift from '../component/Gift/Gift';
import Jewellary from '../component/Jewellary/Jewellary';
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
        path: '/gift',
        element: <Gift></Gift>,
      },
    ],
  },
]);
