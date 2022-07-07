import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Analytics from '../pages/Analytics';
import Chart from '../pages/Chart';
import Settings from '../pages/Settings';
import SignOutPage from '../pages/SignOutPage';

const AllSidebarPages = () => {
  return (
    <React.Fragment>
    <section>
        <Routes>
            <Route path="/" element={<Dashboard />} />
           <Route path="/analytics" element={<Analytics />} />
           <Route path="/charts" element={<Chart />} />
           <Route path="/settings" element={<Settings />} />
           <Route path="/sign-out" element={<SignOutPage />} />
        </Routes>
      
    </section>
  </React.Fragment>
  )
}

export default AllSidebarPages