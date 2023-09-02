import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke, faFolder, faGear, faHouse, faMoneyBill, faSignOutAlt, faUser, faWallet, faClipboardQuestion, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { NavLink } from 'react-router-dom/cjs/react-router-dom';



function SideNav() {
  const [nav, setNav] = useState(true)
  const showBar = () => {
    setNav(!nav)
  }

  return (
    <div className="md:h-screen">
      <div className="flex items-center justify-between md:hidden mx-2 fixed z-50 bg-white top-0 w-screen left-0">
        <div className="flex items-center">
        <FontAwesomeIcon icon={faCircleHalfStroke} className="mr-2"/>
        <h1 className="font-bold text-center text-2xl">Company</h1>
        </div>
        <FontAwesomeIcon icon={faBars} onClick={showBar} className='fixed right-0 mr-2'/>
      </div>

      <div className={`${nav ? 'hidden' : ''} md:block h-full py-3`}>
        <div class="border border-transparent md:w-fit p-3 md:mr-3 md:rounded-lg bg-white md:flex flex-row md:flex-col items-start justify-start md:h-full text-[#475284] w-screen fixed top-8 bottom-0 z-10 md:static animate-fadeRight md:animate-none right-0">
          <div className="flex-row items-center pr-32 cursor-default pl-3 py-1 rounded hidden md:flex">
            <FontAwesomeIcon icon={faCircleHalfStroke} />
            <h1 className="font-semibold ml-3">Company</h1>
          </div>


          <div className="md:mt-6 ">
            <NavLink to='/' className="font-semibold ml-3">
              <div className="flex flex-row items-center pr-32 cursor-pointer hover:bg-[#F4F6F7] py-1.5 pl-3 rounded mb-3 link ">
                <FontAwesomeIcon icon={faHouse} />
                <h1 className='font-semibold ml-3'>Home</h1>
              </div>
            </NavLink>
            
            <div className="flex flex-row  items-center pr-32 cursor-pointer hover:bg-[#F4F6F7] py-1.5 pl-3 rounded mb-3">
              <FontAwesomeIcon icon={faMoneyBill} />
              <h1 className="font-semibold ml-3">Loans</h1>
            </div>
            <NavLink to='/wallet'>
              <div className="flex flex-row  items-center pr-32 cursor-pointer hover:bg-[#F4F6F7] py-1.5 pl-3 rounded mb-3 link">
                <FontAwesomeIcon icon={faWallet} />
                <h1 to="/wallet" className="font-semibold ml-3">Wallet</h1>
              </div>
            </NavLink>
            
            <div className="flex flex-row  items-center pr-32 cursor-pointer hover:bg-[#F4F6F7] py-1.5 pl-3 rounded mb-3">
              <FontAwesomeIcon icon={faFolder} />
              <h1 className="font-semibold ml-3">Portfolio</h1>
            </div>
            <div className="flex flex-row  items-center pr-32 cursor-pointer hover:bg-[#F4F6F7] py-1.5 pl-3 rounded mb-3">
              <FontAwesomeIcon icon={faUser} />
              <h1 className="font-semibold ml-3">Profile</h1>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex flex-row  items-center pr-32 cursor-pointer hover:bg-[#F4F6F7] py-1.5 pl-3 rounded mb-3">
              <FontAwesomeIcon icon={faGear} />
              <h1 className="font-semibold ml-3">Setting</h1>
            </div>
            <div className="flex flex-row  items-center pr-32 cursor-pointer hover:bg-[#F4F6F7] py-1.5 pl-3 rounded mb-3">
              <FontAwesomeIcon icon={faClipboardQuestion} />
              <h1 className="font-semibold ml-3">FAQ</h1>
            </div>
            <hr className="mb-3"/>
            <div className="flex flex-row  items-center pr-32 cursor-pointer hover:bg-[#F4F6F7] py-1.5 pl-3 rounded">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <h1 className="font-semibold ml-3">Sign out</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
