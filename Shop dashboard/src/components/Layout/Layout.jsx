import { Link, Outlet } from "react-router-dom";
import Button from "../Button/Button";
import { useState } from "react";
import Aside from "../Aside/Aside";
import Navbar from "../Navbar/Navbar";




const Layout = () => {
  const [aside, setAside] = useState(true);



  return (
    <div className="flex h-screen">
      {aside && <Aside />}
      <main className="bg-gray-50 w-full">
        <Navbar aside={aside} setAside={setAside} />
        <div className="mt-7 px-5">
          <Outlet />
        </div>
      </main>
    </div>
  )
}


export default Layout;