// src/components/Router.tsx - SIMPLIFIED VERSION
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import MentorshipPage from './pages/MentorshipPage';
import AboutPage from './pages/AboutPage';
import PartnershipsPage from './pages/PartnershipsPage';
import Header from './Header';
import Footer from './Footer';

// Simple Layout component WITHOUT Router
function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
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
      { path: "mentorship", element: <MentorshipPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "partnerships", element: <PartnershipsPage /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}