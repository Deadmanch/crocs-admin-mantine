import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './helpers/ProtectedRoute';
import { AuthLayout, Layout } from './layout';
import {
  AddCategories,
  AddColors,
  AddProducts,
  AddSizes,
  Categories,
  Colors,
  EditCategory,
  EditColor,
  EditProduct,
  EditSize,
  Login,
  Products,
  Register,
  Sizes,
} from './pages';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },

      {
        path: '/categories',
        element: <Categories />,
      },
      {
        path: '/categories/create',
        element: <AddCategories />,
      },
      {
        path: '/categories/:id',
        element: <EditCategory />,
      },

      {
        path: '/sizes',
        element: <Sizes />,
      },
      {
        path: '/sizes/create',
        element: <AddSizes />,
      },
      {
        path: '/sizes/:id',
        element: <EditSize />,
      },

      {
        path: '/colors',
        element: <Colors />,
      },
      {
        path: '/colors/create',
        element: <AddColors />,
      },
      {
        path: '/colors/:id',
        element: <EditColor />,
      },

      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/create',
        element: <AddProducts />,
      },
      {
        path: '/products/:id',
        element: <EditProduct />,
      },
    ],
  },

  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
