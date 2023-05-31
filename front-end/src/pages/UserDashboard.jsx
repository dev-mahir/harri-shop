import React, { useState } from 'react'
import Profile from '../components/UserDashboard/Profile'
import MyOrder from '../components/UserDashboard/MyOrder'
import PersonalDetails from '../components/UserDashboard/PersonalDetails'
import ChangePassword from '../components/UserDashboard/ChangePassword'

const UserDashboard = () => {
  const [tab, setTab] = useState('profile');



  const handleLogout = () => {

  }
  

  return (
    <div className='container py-20'>

      <div className='flex gap-x-14 items-start'>

        <div className='flex flex-col  bg-white _shadow-sm basis-[25%]'>
          <button onClick={() => setTab("profile")}
            className={`px-5 py-3 text-secondary font-medium flex items-center gap-x-2 hover:bg-f1/50 duration-300 ${tab === "profile" ? "bg-theme_color/20 text-theme_color" : ""}`}
          
          > <i className='bx bx-user'></i> Profile</button>

          <button
            onClick={() => setTab("order")}

            className={`px-5 py-3 text-secondary font-medium flex items-center gap-x-2 hover:bg-f1/50 duration-300 ${tab === "order" ? "bg-theme_color/20 text-theme_color" : ""}`}
          >
            <i className='bx text-xl bx-notepad'></i> My orders
          </button>

          <button onClick={() => setTab("info")}

            className={`px-5 py-3 text-secondary font-medium flex items-center gap-x-2 hover:bg-f1/50 duration-300 ${tab === "info" ? "bg-theme_color/20 text-theme_color" : ""}`}
          
          
          > <i className='bx text-xl bx-info-circle' ></i> Information</button>
          <button onClick={() => setTab("change_password")} className={`px-5 py-3 text-secondary font-medium flex items-center gap-x-2 hover:bg-f1/50 duration-300 ${tab === "change_password" ? "bg-theme_color/20 text-theme_color" : ""}`}  > <i className='bx bx-lock'></i> Change password</button>
          
          <button onClick={handleLogout}
            className={`px-5 py-3 text-secondary font-medium flex items-center gap-x-2 hover:bg-f1/50 duration-300 ${tab === "logout" ? "bg-theme_color/20 text-theme_color" : ""}`}
          
          
          > <i className='bx text-xl bx-log-out'></i> Logout</button>
        </div>

        <div className=' bg-white _shadow-sm px-10  py-8 flex-grow'>
          <div>
            {tab === "profile" && <Profile />}
            {tab === "order" && <MyOrder />}
            {tab === "info" && <PersonalDetails />}
            {tab === "change_password" && <ChangePassword />}

          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard;