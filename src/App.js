import { Counter } from './features/counter/Counter'
import './App.css'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'

import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import ProductDetail from './features/product/components/ProductDetail'
import ProductDetailPage from './pages/ProductDetailPage'
import Protected from './features/auth/components/Protected'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { fetchItemsByUserIdAsync } from './features/cart/cartSlice'
import PageNotFound from './pages/404'
import OrderSuccessPage from './pages/OrderSuccessPage'
import UserOrdersPage from './pages/UserOrdersPage'
import UserProfilePage from './pages/UserProfilePage'
import UserProfile from './features/user/components/UserProfile'
import Logout from './features/auth/components/Logout'
import {
  fetchLoggedInUserAsync,
  selectUserInfo,
} from './features/user/userSlice'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ProtectedAdmin from './features/auth/components/ProtectedAdmin'
import AdminHome from './pages/AdminHome'
import AdminProductDetailPage from './pages/AdminProductDetailPage'
import AdminProductFormPage from './pages/AdminProductFormPage'
import AdminOrdersPage from './pages/AdminOrdersPage'
import { positions, Provider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT,
}
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: '/admin',
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/Login',
    element: <LoginPage />,
  },
  {
    path: '/Signup',
    element: <SignupPage />,
  },
  {
    path: '/cart',
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },
  {
    path: '/checkout',
    element: (
      <Protected>
        <Checkout />
      </Protected>
    ),
  },
  {
    path: '/product-detail/:id',
    element: (
      <Protected>
        <ProductDetailPage />
      </Protected>
    ),
  },
  {
    path: '/admin/product-detail/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage></AdminProductDetailPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/orders',
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage></AdminOrdersPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form/edit/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/order-success/:id',
    element: (
      <Protected>
        <OrderSuccessPage></OrderSuccessPage>{' '}
      </Protected>
    ),
  },
  {
    path: '/orders',
    element: (
      <Protected>
        <UserOrdersPage></UserOrdersPage>{' '}
      </Protected>
    ),
  },
  {
    path: '/profile',
    element: (
      <Protected>
        <UserProfilePage></UserProfilePage>{' '}
      </Protected>
    ),
  },
  {
    path: '/logout',
    element: <Logout></Logout>,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])
function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUserInfo)

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  }, [dispatch, user])
  return (
    <>
      <div className="App">
        <Provider template={AlertTemplate} {...options}>
          <RouterProvider router={router} />
        </Provider>
        {/* Link must be inside the Provider */}
      </div>
    </>
  )
}

export default App
