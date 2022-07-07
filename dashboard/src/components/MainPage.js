import React from "react";
import AllSidebarPages from "./AllSidebarPages";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainPage = () => {
  return (
    <React.Fragment>
      <section>
        <div>
          <div>
            <Navbar />
          </div>

          <div className="w-full h-screen flex ">
            <div>
              <Sidebar />
            </div>
            <div className="w-full h-screen">
              <AllSidebarPages />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;
