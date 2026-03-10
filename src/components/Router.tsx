// src/components/Router.tsx - FINAL VERSION
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import ProgramBatchesPage from './pages/ProgramBatchesPage';
import ProgramBatchDetail from './pages/ProgramBatchDetail';
import MentorshipPage from './pages/MentorshipPage';
import AboutPage from './pages/AboutPage';
import PartnershipsPage from './pages/PartnershipsPage';
import ApplicationPage from './pages/ApplicationPage';
import ApplicationSuccess from './pages/ApplicationSuccess';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsConditions';
import TermsConditions from './pages/TermsConditions';

// Simple Layout component
function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "programs", element: <ProgramsPage /> },
      { path: "programs/:id/batches", element: <ProgramBatchesPage /> },
      { path: "programs/:id/:batch", element: <ProgramBatchDetail /> },
      { path: "mentorship", element: <MentorshipPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "partnerships", element: <PartnershipsPage /> },
      { path: "apply", element: <ApplicationPage /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "terms", element: <TermsConditions /> },
      { path: "application-success", element: <ApplicationSuccess /> },
      { path: "*", element: <Navigate to="/" replace /> },
      
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}