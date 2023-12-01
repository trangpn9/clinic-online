import { createBrowserRouter } from 'react-router-dom';

import NoMatch from './../components/NoMatch';
import Layout from './../app/Layout';
import Home from './../components/Home';
import Doctor from '../components/Doctor';
import Patient from '../components/Patient';
import DoctorRoom from '../components/Doctor/DoctorRoom';
import { RootErrorBoundary } from '../utils/HandleErrors';
import DoctorLogin from './../components/Doctor/DoctorLogin';
import PatientLogin from './../components/Patient/PatientLogin';
import PatientRoom from './../components/Patient/PatientRoom';
import("../components/Doctor")

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout title={'Clinic Online'} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "doctor",
        element: <Doctor/>, 
        children: [
          {
            index: true,
            errorElement: <RootErrorBoundary />,
            element: <DoctorLogin/>
          },
          {
            path: "doctor-room",
            element: <DoctorRoom/>
          }
        ]        
      },
      {
        path: "patient",
        element: <Patient />,
        children: [
          {
            index: true,
            errorElement: <RootErrorBoundary/>,
            element: <PatientLogin/>
          },
          {
            path: "patient-room",
            element: <PatientRoom/>
          }
        ]
      },
      // {
      //   path: "about",
      //   // Single route in lazy file
      //   lazy: () => import("./pages/About"),
      // },
      // {
      //   path: "dashboard",
      //   async lazy() {
      //     // Multiple routes in lazy file
      //     let { DashboardLayout } = await import("./pages/Dashboard");
      //     return { Component: DashboardLayout };
      //   },
      //   children: [
      //     {
      //       index: true,
      //       async lazy() {
      //         let { DashboardIndex } = await import("./pages/Dashboard");
      //         return { Component: DashboardIndex };
      //       },
      //     },
      //     {
      //       path: "messages",
      //       async lazy() {
      //         let { dashboardMessagesLoader, DashboardMessages } = await import(
      //           "./pages/Dashboard"
      //         );
      //         return {
      //           loader: dashboardMessagesLoader,
      //           Component: DashboardMessages,
      //         };
      //       },
      //     },
      //   ],
      // },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);