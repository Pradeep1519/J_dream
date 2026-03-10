// src/components/Router.tsx - FINAL VERSION
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import MentorshipPage from './pages/MentorshipPage';
import AboutPage from './pages/AboutPage';
import PartnershipsPage from './pages/PartnershipsPage';
import ProgramBatchDetail from './pages/ProgramBatchDetail';

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
      { path: "programs/:id", element: <ProgramDetailPage /> },
      { path: "programs/:id/:batch", element: <ProgramBatchDetail /> },
      { path: "mentorship", element: <MentorshipPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "partnerships", element: <PartnershipsPage /> },
      { path: "*", element: <Navigate to="/" replace /> }
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}