import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App';
import ResumeSection from './components/ResumeSection';
import AboutMeSection from './components/AboutMeSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
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
  