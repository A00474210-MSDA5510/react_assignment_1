import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeTown from './pages/HomeTown'
import AboutMe from './pages/AboutMe'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <AboutMe />,
  },
  {
    path: "/MyTown",
    element: <HomeTown />,
  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <nav>
      <ul>
        <li><a href='/'>AboutMe</a></li>
        
      </ul>
    </nav>
       <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
