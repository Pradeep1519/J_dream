// src/components/Router.tsx - FINAL VERSION
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import ProgramBatchesPage from './pages/ProgramBatchesPage';
import ProgramBatchDetail from './pages/ProgramBatchDetail';
import MentorshipPage from './pages/MentorshipPage';
import AboutPage from './pages/AboutPage';
import PartnershipsPage from './pages/PartnershipsPage';

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
      { path: "programs/:id/batches", element: <ProgramBatchesPage /> }, // ✅ NEW - Shows 3 batches
      { path: "programs/:id/:batch", element: <ProgramBatchDetail /> },  // ✅ Batch details
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