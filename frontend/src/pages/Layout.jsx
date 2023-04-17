import React from 'react';
import {LeftSidebar} from "./../components/leftSidebar/leftSidebar";
import {RightSidebar} from "./../components/rightSidebar/rightSidebar";
import {Outlet} from 'react-router-dom'
import Footer from "../components/footer/footer";

export const Layout = () => {
  return (
    <>
      <div className='wrapper'>
        <LeftSidebar/>
        <Outlet/>
        <RightSidebar/>
      </div>
      <Footer/>
    </>
  );
};
