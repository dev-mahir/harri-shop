import { useEffect } from 'react';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import { useLocation } from 'react-router-dom';

const AuthLayout = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {

  }, []);



  return (
    <div className='py-10'>
      <div className='grid grid-cols-2 max-w-[900px] mx-auto shadow-md rounded-md overflow-hidden items-center border-gray-200'>
        <div>
          <img src="https://dashtar-admin.vercel.app/static/media/create-account-office.080280cb.jpeg" alt="" />
        </div>
        <div className='px-10'>
          {pathname === "/login" && <LoginPage />}
          {pathname === "/signup" && <RegisterPage />}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout;