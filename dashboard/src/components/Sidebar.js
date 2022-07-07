import React, { useState } from "react";
import { SidebarData } from "../data/SidebarData";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const [openSidebar, setOpenSidebar] = useState(false);

    const handleOpenSidebar = () => {
        setOpenSidebar(!openSidebar);
      };

    //   classes for active link
      const activeLink='text-blue-900'
      const normalLink =''
  return (
    <React.Fragment>
    <section className='relative'>
        <div className="text-2xl ">
            <div className="openIcon">
                {
                    (!openSidebar && <FaAngleDoubleRight
                        className="bg-gray-300 rounded-full" 
                         onClick={handleOpenSidebar} />)
                }
   
            </div>
            <div className="closeIcon">
                {
                    (openSidebar &&    
                            <FaAngleDoubleLeft
                            className="bg-gray-300 rounded-full"
                             onClick={handleOpenSidebar}/>)
                }
   
            </div>
        </div>
      <div className='w-60 h-screen grid grid-cols-3'>
        <div className="bg-gray-300">
            {
                SidebarData.map((item, index) =>{
                    return(
                        <div key={index}>
                            <div className="h-20 text-3xl mt-10 centered">
                                <NavLink to={item.path}
                                           className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                >
                                <span>{item.icon}</span>
                                </NavLink>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className={`bg-gray-300 col-span-2 ${(openSidebar === true)? 'block': 'hidden'}`}>
        {
                SidebarData.map((item, index) =>{
                    return(
                        <div key={index}>
                            <div className="h-20 text-3xl mt-10 capitalize flex items-center justify-start ">
                              <NavLink to={item.path}
                                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                              >
                                <span>{item.title}</span>
                                </NavLink>
                            </div>
                        </div>
                    )
                })
            }
        </div>
          
      </div>
    </section>
  </React.Fragment>
  )
}

export default Sidebar