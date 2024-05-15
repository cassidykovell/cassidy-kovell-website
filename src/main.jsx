import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App';
import Header from './components/Header';
import Nav from './components/Nav';
import ResumeSection from './components/ResumeSection';
import AboutMeSection from './components/AboutMeSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <AboutMeSection />,
        },
        {
          path: '/projects',
          element: <ProjectSection />,
        },
        {
          path: '/resume',
          element: <ResumeSection />,
        },
        {
            path: '/contact',
            element: <ContactSection />,
          },
      ],
    },
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
  