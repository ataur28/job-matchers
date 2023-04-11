import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistic from './components/Statistics/Statistic';
import AppliedJobs from './components/ApplidJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import ErrorElement from './components/ErrorElement/ErrorElement';
import First from './components/First/First';
import JobCategory from './components/JobCategory/JobCategory';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <First></First>,
        loader: () => fetch('jobCategory.json')
      },
      {
        path: 'job-category',
        element: <JobCategory></JobCategory>,
        loader: () => fetch('jobCategory.json')
      },
      {
        path: 'statistics',
        element: <Statistic></Statistic>
      },
      {
        path: 'applied-job',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <div>44444444444440444444444444</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
