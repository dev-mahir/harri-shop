import Header from './components/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPassword from './pages/ForgotPassword';
import Footer from './components/Footer/Footer';
import CheckoutPage from './pages/CheckoutPage';
import CartPage from './pages/CartPage';
import ShopPage from './pages/ShopPage';
import PlaceOrder from './pages/PlaceOrder';
import WishlistPage from './pages/WishlistPage';
import UserDashboard from './pages/UserDashboard';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import ComingSoon from './pages/ComingSoon';
import ProductDetails from './pages/ProductDetails';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Header />
        <Routes>
          <Route path='*' element={<ErrorPage />}></Route>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/forgot-password' element={<ForgotPassword />}></Route>
          <Route path='/checkout' element={<CheckoutPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/shop' element={<ShopPage />}></Route>
          <Route path='/product-details/:product' element={<ProductDetails />}></Route>
          <Route path='/place-order/:id' element={<PlaceOrder />}></Route>
          <Route path='/wishlist' element={<WishlistPage />}></Route>
          <Route path='/user/:name' element={<UserDashboard />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
          <Route path='/coming-soon' element={<ComingSoon />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )


}

export default App;
