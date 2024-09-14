import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage.tsx'
import UsersPage from './pages/UsersPage.tsx'
import AppLayout from './core/components/AppLayout.tsx'
import UserInfoPage from './pages/UserInfoPage.tsx'
import RoomsPage from './pages/RoomsPage.tsx'
import RoomInfoPage from './pages/RoomInfoPage.tsx'

const router = createBrowserRouter([
  {
    path: "/login",
    loader: () => {
      if (localStorage.getItem("access_token")) {
        location.replace("/dashboard")
        return true
      } else {
        return false
      }
    },
    element: <><LoginPage /></>,
    index: true
  },
  {
    path: "/",
    element: <><LoginPage /></>,
  },
  {
    path: "/dashboard",
    loader: () => {
      if (localStorage.getItem("access_token")) {
        return true
      }else {
        location.replace("/login")
        return false
      }
    },
    element: <>
      <AppLayout />
    </>,
    children: [
      {
        path: "users",
        element: <UsersPage />
      },
      {
        path: "users/:id",
        element: <UserInfoPage />
      },
      {
        path: "rooms",
        element: <RoomsPage />
      },
      {
        path: "rooms/:id",
        element: <RoomInfoPage />
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />,
)
