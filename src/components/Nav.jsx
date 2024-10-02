import React from 'react'
import TopNav from './nav_components/TopNav';
import BottomNav from './nav_components/BottomNav';

const Nav = () => {
  return (
  <div className="py-5 shadow-md px-5">
    <TopNav />
    <BottomNav />
  </div>
  );
}

export default Nav
