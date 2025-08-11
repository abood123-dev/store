import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.tsx'
import Details from './Details.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>
    },
    {
      path:'/details/:id',
      element:<Details/>
    }
  ])
root.render(
  <>
     <RouterProvider router={router}/>
  </> 
);

