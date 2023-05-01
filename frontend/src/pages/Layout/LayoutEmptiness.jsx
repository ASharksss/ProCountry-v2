import React from 'react';
import './layout.css'
import {Outlet} from "react-router-dom";

const LayoutEmptiness = () => {
  return (
    <div className='layoutEmptiness'>
      <Outlet/>
    </div>
  );
};

export default LayoutEmptiness;