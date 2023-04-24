import { Link } from "react-router-dom";
import Button from "../components/Button/Button";


const LoginPage = () => {
  return (

    <>

      <h2 className='font-space text-primary mb-5'>Create account</h2>

      <form>
        <div className='mb-3'>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' placeholder='Enter email' />
        </div>


        <div className='mb-3'>
          <label htmlFor="Password">Password</label>
          <input type="text" id='Password' placeholder='Enter Password' />
        </div>

        <div className='flex items-center justify-start gap-x-2'>
          <input type="checkbox" className='w-auto' id='password' /> <label htmlFor="password" className='cursor-pointer text-secondary'>Forgot password?</label>
        </div>

        <div className="mt-4">
          <Button
            btnName="Login"
            className="w-full"
          />
        </div>
      </form>

      <div className="divider my-5"></div>

      <p className='text-sm text-secondary mb-3'>No account? <Link to="/signup" className='text-theme_color font-medium'>Signup</Link></p>

      <div>

        <Button
          btnName="Login With Facebook"
          startIcon={<i className='bx text-xl bxl-facebook'></i>}
          className="w-full bg-gray-100 !text-primary hover:!text-white hover:bg-blue-500"
        />
        <Button
          btnName="Login With Facebook"
          startIcon={<i className='bx text-xl bxl-google'></i>}
          className="w-full bg-gray-100 mt-4 !text-primary hover:bg-red-500 hover:!text-white"

        />
      </div>
    </>
  )
}

export default LoginPage;