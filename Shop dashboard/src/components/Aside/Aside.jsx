import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Aside = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <aside className="min-w-[200px] relative px-5 overflow-hidden">
      <div>
        <Link to="/">Dashtar</Link>
      </div>
      <div className="flex flex-col space-y-4 mt-14">
        <Link to="/dashboard" className="text-secondary font-medium">Dashboard</Link>
        <div>
          <button onClick={() => setDropdown(!dropdown)} className="text-left text-secondary font-medium flex items-center">Catalog
            <i className={`bx text-xl  ${dropdown ? "bx-chevron-down" : "bx-chevron-right" }`}></i>
          </button>
          {dropdown && <div className="flex flex-col space-y-2 pl-3 mt-3">
            <Link to="/product" className="text-secondary font-medium">-Product</Link>
            <Link to="/category" className="text-secondary font-medium">-Category</Link>
            <Link to="/brand" className="text-secondary font-medium">-Brand</Link>
            <Link to="/tag" className="text-secondary font-medium">-Tag</Link>
            <Link to="/color" className="text-secondary font-medium">-Color</Link>
          </div>}
        </div>
        <Link to="/order" className="text-secondary font-medium">Order</Link>
        <Link to="/setting" className="text-secondary font-medium">Setting</Link>
      </div>

      <div className="text-center w-full absolute left-0 bottom-5">
        <Button
          className=" w-[80%] mx-auto"
          btnName="Logout"
        />
      </div>

    </aside>
  )
}

export default Aside